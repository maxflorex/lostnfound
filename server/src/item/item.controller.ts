import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Item } from './item.schema';
import { ItemService } from './item.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags, ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';


@ApiTags('Items')
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @Post()
  @ApiCreatedResponse({
    description: 'Created item object as response',
    type: Item,
  })
  @ApiBadRequestResponse({
    description: 'Item was not created. Try again.',
  })
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }


  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retrieved all items successfully',
    type: Item,
    isArray: true,
  })
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }


  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retrieved an item successfully',
    type: Item,
  })
  @ApiNotFoundResponse({
    description: 'The item with the provided ID does not exist',
  })
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }


  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Updated item successfully',
    type: Item,
  })
  @ApiNotFoundResponse({
    description: 'The item with the provided ID does not exist',
  })
  async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.update(id, item);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleted item successfully',
    type: Item,
  })
  @ApiNotFoundResponse({
    description: 'The item with the provided ID does not exist',
  })
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemService.delete(id);
  }
}