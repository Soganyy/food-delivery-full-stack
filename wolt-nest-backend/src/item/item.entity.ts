import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Merchant } from 'src/merchant/merchant.entity';
import { BaseEntity } from 'src/common/base.entity';
import { OrderItem } from 'src/order-item/order-item.entity';

@Entity('items')
export class Item extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  title: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty()
  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => Merchant, (merchant) => merchant.items)
  merchant: Merchant;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.item)
  orderItems: OrderItem[];
}
