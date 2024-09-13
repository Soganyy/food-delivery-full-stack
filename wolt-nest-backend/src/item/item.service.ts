import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { ItemCreateDto } from './dto/item.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MerchantService } from 'src/merchant/merchant.service';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemEntity: Repository<Item>,
    private merchantService: MerchantService,
  ) {}

  async getItems(merchantId?: number) {
    if (merchantId) {
      return await this.itemEntity.find({
        where: { merchant: { id: merchantId } },
      });
    }
    return await this.itemEntity.find();
  }

  async createItem(body: ItemCreateDto, user: any) {
    const merchant = await this.merchantService.findOne({
      email: user.email,
      password: user.password,
    });

    const newItem = this.itemEntity.create({ ...body, merchant: merchant });
    const result = await this.itemEntity.save(newItem);

    return result;
  }

  async updateItem(body: ItemCreateDto, id: number) {
    const itemExist = await this.itemEntity.findOne({
      where: { id: id },
    });

    if (!itemExist) throw new NotFoundException('Item not found');

    const item = Object.assign(itemExist, body);
    const result = await this.itemEntity.save(item);

    return result;
  }

  async deleteItem(id: number) {
    try {
      const item = await this.itemEntity.findOne({ where: { id: id } });

      if (!item) throw new NotFoundException('Item not found');
      await this.itemEntity.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
