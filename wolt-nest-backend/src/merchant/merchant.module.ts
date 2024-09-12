import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  providers: [MerchantService],
  exports: [MerchantService],
})
export class MerchantModule {}
