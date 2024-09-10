import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/base.entity';
import { Order } from 'src/order/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Courier extends BaseEntity {
  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  phoneNumber: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  vehicle: number;

  @OneToMany(() => Order, (order) => order.courier)
  orders: Order[];
}
