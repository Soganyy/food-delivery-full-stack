import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantController } from './merchant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  providers: [MerchantService],
  exports: [MerchantService],
  controllers: [MerchantController],
})
export class MerchantModule {}
