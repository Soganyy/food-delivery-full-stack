import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { AuthModule } from 'src/auth/auth.module';
import { MerchantModule } from 'src/merchant/merchant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), AuthModule, MerchantModule],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
