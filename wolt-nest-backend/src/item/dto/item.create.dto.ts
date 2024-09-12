import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class ItemCreateDto {
  @ApiProperty({ default: 'string' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: 'string' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  price: number;
}
