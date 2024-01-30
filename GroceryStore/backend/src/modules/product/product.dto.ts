import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class addProductsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  thumbnail: any;

  @IsString()
  @IsNotEmpty()
  price: string;
}

export class getProductsDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  price: string;
}

export class UpdateProductsDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  thumbnail: Buffer;

  @IsString()
  @IsOptional()
  price: string;
}
