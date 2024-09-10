import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/item/item.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @ApiProperty()
  @Column()
  title: string;

  // ParentId

  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
}
