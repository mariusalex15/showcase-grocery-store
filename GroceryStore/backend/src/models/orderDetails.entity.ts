// order-detail.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderEntity, ProductEntity, UsersEntity } from '.';

@Entity()
export class OrderDetailsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //   @ManyToOne(() => OrderEntity, (order) => order.id)
  @Column({ type: 'int', nullable: false })
  orderId: string;

  //   @ManyToOne(() => ProductEntity, (product) => product.id)
  @Column({ type: 'int', nullable: false })
  productId: string;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;
}
