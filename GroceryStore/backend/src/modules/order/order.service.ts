import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailsEntity, OrderEntity } from 'src/models';
import { Repository } from 'typeorm';
import { createOrder } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity) private order: Repository<OrderEntity>,
    @InjectRepository(OrderDetailsEntity)
    private orderDetails: Repository<OrderDetailsEntity>,
  ) {}

  async createOrder(payload: createOrder) {
    const createOrder: { orderPrice: string; userId: string } = {
      orderPrice: payload.orderPrice,
      userId: payload.userId,
    };

    const order: any = await this.order.save(createOrder);

    const createOrderDetails: any = await payload.OrderDetails.map(
      (orderDetail) => {
        return {
          orderId: order.id,
          productId: orderDetail.productId,
          quantity: orderDetail.quantity,
        };
      },
    );

    await this.orderDetails.save(createOrderDetails);

    return { message: 'Order Successfully Placed' };

    // return await this.orderRepository.save(order);
    // const createOrderPayload = {
    //     userId
    // }
    // const order = this.orderRepository.save(payload);
  }
}
