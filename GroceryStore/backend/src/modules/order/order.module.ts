import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderDetailsEntity, OrderEntity } from 'src/models';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetailsEntity, OrderEntity])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
