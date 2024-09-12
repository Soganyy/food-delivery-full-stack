import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/base.entity';
import { Item } from 'src/item/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('specifications')
export class Specification extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  type: string;

  @ApiProperty()
  @Column({ type: 'bigint' })
  option: number;
}
