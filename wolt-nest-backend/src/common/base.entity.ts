import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @ApiProperty()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: new Date().toISOString(),
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: new Date().toISOString(),
  })
  updatedAt: Date;
}
