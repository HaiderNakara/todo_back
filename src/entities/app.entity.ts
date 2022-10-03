import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @ApiProperty()
  @Prop()
  title: string;
  @ApiProperty()
  @Prop()
  note: string;
  @Prop()
  id: string;
}


export const TodoSchema = SchemaFactory.createForClass(Todo);