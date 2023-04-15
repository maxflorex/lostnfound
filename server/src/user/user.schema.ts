import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {

  @ApiProperty({
    description: "Enter the user's name",
    example: "John Doe"
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: "Enter the user's email",
    example: "johndoe@example.com"
  })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({
    description: "Enter the user's password",
    example: "MyPassword123"
  })
  @Prop()
  password: string;
}

// Declare the UserSchema after the User class definition
export const UserSchema = SchemaFactory.createForClass(User);
