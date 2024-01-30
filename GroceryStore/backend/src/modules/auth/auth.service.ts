import { Injectable } from '@nestjs/common';
import { ILogin, Isignup, authResponse } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { roundPasswordLength } from 'src/shared/files/constant';
import { ValidateService } from 'src/shared/services';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/models';
import { Repository } from 'typeorm';
import * as Exception from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  roundPasswordLength = roundPasswordLength;

  constructor(
    @InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>,
    private validateService: ValidateService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(payload: Isignup) {
    if (payload.email) {
      const email = await this.validateService.IsUserExistByEmail(
        payload.email,
      );
      if (email) {
        throw new Exception.ConflictException(
          'This email is already registered',
        );
      }
    }
    if (payload.phone) {
      const phone = await this.validateService.IsUserExistByPhone(
        payload.phone,
      );
      if (phone) {
        throw new Exception.ConflictException(
          'This phone number is already registered',
        );
      }
    }

    payload.password = await bcrypt.hash(payload.password, roundPasswordLength);

    const response = await this.userRepo.save(payload);

    if (response) {
      return { message: 'Successfully SignUp' };
    } else {
      throw new Exception.InternalServerErrorException('Something went wrong');
    }
  }

  async login(payload: ILogin) {
    const isUser = await this.userRepo.findOne({
      where: {
        email: payload.email,
      },
    });

    if (!isUser) {
      throw new Exception.NotFoundException('This email is not registered.');
    }

    const isPassword = await bcrypt.compare(payload.password, isUser.password);

    if (!isPassword) {
      throw new Exception.BadRequestException(
        'User name or password is incorrect',
      );
    }

    const token = await this.createToken({
      email: isUser.email,
      phone: isUser.phone,
      firstName: isUser.firstName,
      lastName: isUser.lastName,
      password: isUser.password,
    });

    const response: any = await this.userRepo.update(
      { id: isUser.id },
      { token },
    );

    delete isUser.password;
    delete isUser.updatedAt;
    isUser.token = token;
    return { data: isUser };
  }

  async createToken(payload: any) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async logout(payload) {
    try {
      await this.userRepo.update(payload, { token: null });
      return { message: 'Logout Successfully' };
    } catch (err) {
      console.log(err);
      throw new Exception.BadGatewayException('Something went wrong');
    }
  }

  async isValidToken(userDetails: any) {
    const user = await this.userRepo.findOne({
      where: {
        email: userDetails.email,
      },
    });
    return user;
  }
}
