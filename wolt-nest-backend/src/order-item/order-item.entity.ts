import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/order/order.entity';
import { Item } from 'src/item/item.entity';
import { BaseEntity } from 'src/common/base.entity';

@Entity('orderItems')
export class OrderItem extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'bigint' })
  quantity: number;

  @ApiProperty()
  @Column({ type: 'bigint' })
  price: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
}
