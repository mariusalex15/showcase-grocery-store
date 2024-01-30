import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ILogin, Isignup } from './auth.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() payload: Isignup) {
    return await this.authService.signup(payload);
    // return ;
  }

  @Post('/signin')
  async login(@Body() payload: ILogin) {
    return await this.authService.login(payload);
  }

  @Post('/signout')
  async logout(@Query() payload: { id: string }) {
    return await this.authService.logout(payload);
  }
}
