import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum ItemStatus {
    FOUND = 'FOUND',
    LOST = 'LOST',
}

export enum ItemCategory {
    HOME = 'HOME',
    ENTERTAINMENT = 'ENTERTAINMENT',
    CLOTHING = 'CLOTHING',
    FAMILY = 'FAMILY',
    ELECTRONICS = 'ELECTRONICS',
    HOBBIES = 'HOBBIES',
    MISC = 'MISCELLANEOUS',
    VEHICLES = 'VEHICLES'
}

export class Place {
    @ApiProperty({
        description: "Enter the city where the item was found",
        example: "TOronto"
    })
    city: string

    @ApiProperty({
        description: "Enter the country where the item was found",
        example: "Canada"
    })
    country: string
}

export type ItemDocument = Item & Document;

@Schema()
export class Item {

    @ApiProperty({
        description: "Enter the item's title",
        example: "Bike"
    })
    @Prop()
    title: string

    @ApiProperty({
        description: "Enter the item's category",
        example: "HOME"
    })
    @Prop()
    category: ItemCategory

    @ApiProperty({
        description: "Enter the item's location",
        example: {city: 'Toronto', country: 'Canada'}
    })
    @Prop()
    where: Place

    @ApiProperty({
        description: "Enter the date when the item will be available",
        example: "2023-06-01"
    })
    @Prop()
    when: Date

    @ApiProperty({
        description: "Enter the URL of the item's picture",
        example: "https://example.com/bike.jpg"
    })
    @Prop()
    picture: string

    @ApiProperty({
        description: "Enter the status of the item",
        example: "FOUND"
    })
    @Prop()
    status: ItemStatus

    @ApiProperty({
        description: "Enter the contact information for the item",
        example: "john@example.com"
    })
    @Prop()
    contact: string

}

export const ItemSchema = SchemaFactory.createForClass(Item)