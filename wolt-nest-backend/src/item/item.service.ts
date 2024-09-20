import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { ItemCreateDto } from './dto/item.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MerchantService } from 'src/merchant/merchant.service';
import { ItemResponseDto } from './dto/item.response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemEntity: Repository<Item>,
    private merchantService: MerchantService,
  ) {}

  async getItemById(id: number) {
    const item = await this.itemEntity.findOne({
      where: { id: id },
      relations: ['merchant'],
    });

    return item;
  }

  async getItems(id?: number, merchantId?: number): Promise<ItemResponseDto[]> {
    let where: any = {};

    if (merchantId) {
      where.merchant = { id: merchantId };
    }

    if (id) {
      where.id = id;
    }

    const items = await this.itemEntity.find({
      where,
      relations: ['merchant'],
    });

    return items.map((item) =>
      plainToInstance(ItemResponseDto, {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        merchantId: item.merchant.id,
      }),
    );
  }

  async createItem(body: ItemCreateDto, user: any): Promise<ItemResponseDto> {
    const merchant = await this.merchantService.findOne({
      email: user.email,
      password: user.password,
    });

    const newItem = this.itemEntity.create({ ...body, merchant: merchant });
    const savedItem = await this.itemEntity.save(newItem);

    return plainToInstance(ItemResponseDto, {
      id: savedItem.id,
      title: savedItem.title,
      description: savedItem.description,
      price: savedItem.price,
      merchantId: savedItem.merchant.id,
    });
  }

  async updateItem(body: ItemCreateDto, id: number): Promise<ItemResponseDto> {
    const itemExist = await this.itemEntity.findOne({ where: { id: id } });

    if (!itemExist) throw new NotFoundException('Item not found');

    const updatedItem = Object.assign(itemExist, body);
    const savedItem = await this.itemEntity.save(updatedItem);

    return plainToInstance(ItemResponseDto, {
      id: savedItem.id,
      title: savedItem.title,
      description: savedItem.description,
      price: savedItem.price,
      merchantId: savedItem.merchant.id,
    });
  }

  async deleteItem(id: number): Promise<void> {
    const item = await this.itemEntity.findOne({ where: { id: id } });

    if (!item) throw new NotFoundException('Item not found');
    await this.itemEntity.delete(id);
  }
}
