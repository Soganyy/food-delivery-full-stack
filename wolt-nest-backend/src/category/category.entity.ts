import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/base.entity';
import { Item } from 'src/item/item.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {
  @ApiProperty()
  @Column()
  title: string;

  // ParentId
}
