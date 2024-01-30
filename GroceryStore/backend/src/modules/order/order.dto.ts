import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class createOrder {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  orderPrice: string;

  @IsNotEmpty()
  @IsArray()
  OrderDetails: createOrderDetails[];
}

export class createOrderDetails {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;
}
