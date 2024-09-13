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
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { RolesEnum } from 'src/enums/roles.enum';

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
  @Roles(RolesEnum.Merchant)
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  createItem(@Body() body: ItemCreateDto, @Req() req: any) {
    return this.itemService.createItem(body, req.user);
  }

  @Put(':id')
  @Roles(RolesEnum.Merchant)
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  updateItem(@Body() body: ItemCreateDto, @Param('id') id: number) {
    return this.itemService.updateItem(body, id);
  }

  @Delete(':id')
  @Roles(RolesEnum.Merchant)
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  deleteItem(@Param('id') id: number) {
    return this.itemService.deleteItem(id);
  }
}
