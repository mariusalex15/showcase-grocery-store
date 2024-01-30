import { Body, Controller, Post } from '@nestjs/common';
import { createOrder } from './order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() payload: createOrder) {
    return this.orderService.createOrder(payload);
  }
}
