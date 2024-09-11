import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/item/item.entity';
import { Order } from 'src/order/order.entity';
import { BaseEntity } from 'src/common/base.entity';

@Entity('merchants')
export class Merchant extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  email: string;

  @ApiProperty()
  @Column({ type: 'text' })
  phoneNumber: string;

  @ApiProperty()
  @Column({ type: 'text' })
  password: string;

  @ApiProperty()
  @Column({ type: 'text' })
  businessName: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  address: string;

  @OneToMany(() => Item, (item) => item.merchant)
  items: Item[];

  @OneToMany(() => Order, (order) => order.merchant)
  orders: Order[];
}
