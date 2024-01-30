import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class IcreateContact {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
