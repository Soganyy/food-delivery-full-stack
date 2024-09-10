import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Merchant } from 'src/merchant/merchant.entity';
import { OrderItem } from 'src/order-item/order-item.entity';
import { Specification } from 'src/specification/specification.entity';
import { Category } from 'src/category/category.entity';

@Entity('items')
export class Item {
  @ApiProperty()
  @Column({ type: 'text' })
  title: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty()
  @Column({ type: 'bigint' })
  price: number;

  @ManyToOne(() => Merchant, (merchant) => merchant.items)
  merchant: Merchant;

  @OneToMany(() => Specification, (specification) => specification.item)
  specifications: Specification[];

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.item)
  orderItems: OrderItem[];
}
