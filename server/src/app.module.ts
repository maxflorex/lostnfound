import { Module } from '@nestjs/common';
import { LostItemsModule } from './lost-items/lost-items.module';

@Module({
  imports: [LostItemsModule],
})
export class AppModule {}
