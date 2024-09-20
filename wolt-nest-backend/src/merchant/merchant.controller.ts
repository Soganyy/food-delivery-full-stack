import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MerchantService } from './merchant.service';

@Controller('merchant')
@ApiTags('Merchant')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}

  @Get()
  getMerchants() {
    return this.merchantService.getMerchants();
  }
}
