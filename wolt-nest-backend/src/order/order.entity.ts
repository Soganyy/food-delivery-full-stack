import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Merchant } from 'src/merchant/merchant.entity';
import { OrderItem } from 'src/order-item/order-item.entity';
import { Courier } from 'src/courier/courier.entity';
import { BaseEntity } from 'src/common/base.entity';

@Entity('orders')
export class Order extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  title: string;

  @ApiProperty()
  @Column({ type: 'bigint' })
  totalPrice: number;

  @ApiProperty()
  @Column({ type: 'bigint' })
  deliveryPrice: number;

  @ApiProperty()
  @Column({ type: 'time' })
  deliveryTime: Date;

  @ApiProperty()
  @Column({ type: 'text' })
  status: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Merchant, (merchant) => merchant.orders)
  merchant: Merchant;

  @ManyToOne(() => Courier, (courier) => courier.orders)
  courier: Courier;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
}
