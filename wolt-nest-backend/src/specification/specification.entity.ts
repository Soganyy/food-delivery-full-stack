import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/item/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('specifications')
export class Specification {
  @ApiProperty()
  @Column({ type: 'text' })
  type: string;

  @ApiProperty()
  @Column({ type: 'bigint' })
  option: number;

  @ManyToOne(() => Item, (item) => item.specifications)
  item: Item;
}
