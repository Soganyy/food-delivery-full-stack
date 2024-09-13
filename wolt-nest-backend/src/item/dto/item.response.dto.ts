import { ApiProperty } from '@nestjs/swagger';

export class ItemResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  merchantId: number;
}
