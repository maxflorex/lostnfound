import { Module } from '@nestjs/common';
import { LostItemsController } from './lost-items.controller';

@Module({
  controllers: [LostItemsController]
})
export class LostItemsModule {}
