import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ItemStatus {
    FOUND = 'FOUND',
    LOST = 'LOST',
  }

export class Place {
    city: string
    country: string
}

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop()
    title: string

    @Prop()
    where: Place

    @Prop()
    when: string

    @Prop()
    picture: string

    @Prop()
    status: ItemStatus

    @Prop()
    contact: string
}

export const ItemSchema = SchemaFactory.createForClass(Item)