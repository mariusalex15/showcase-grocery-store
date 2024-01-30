// order.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { OrderDetailsEntity, UsersEntity } from '.';

@Entity()
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  orderPrice: string;

  @Column({ nullable: false, type: 'varchar' })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;
}
