import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemCreateDto } from './dto/item.create.dto';
import { AuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  getItems() {
    return this.itemService.getItems();
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  createItem(@Body() body: ItemCreateDto, @Req() req: any) {
    return this.itemService.createItem(body, req.user);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  updateItem(@Body() body: ItemCreateDto, @Param('id') id: number) {
    return this.itemService.updateItem(body, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  deleteItem(@Param('id') id: number) {
    return this.itemService.deleteItem(id);
  }
}
