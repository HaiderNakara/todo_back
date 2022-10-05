import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatetodoDto } from './dto/update-cat.dto';
import { Todo } from './entities/app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) { }
  getHello(): string {
    return 'Hello World!';
  }
  async createtodo(todo: Todo): Promise<Todo> {
    const id = Math.floor(1000 + Math.random() * 9000);
    const newtodo = new this.todoModel({ id, ...todo });
    return await newtodo.save();
  }
  async findAlltodos(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }
  async findtodoById(id: string): Promise<Todo> {
    try {
      const temp = await this.todoModel.findOne({
        id,
      }).exec();
      if (temp) {
        return temp;
      }
      throw new NotFoundException('Todo not found');
    } catch (error) {
      throw new BadRequestException();
    }
  }
  async updatetodo(id: string, todo: UpdatetodoDto): Promise<Todo> {
    try {

      const ntodo = await this.todoModel.findOne({ id }).exec();
      if (ntodo) {
        return await this.todoModel.findByIdAndUpdate(ntodo._id, todo, { new: true }).exec();
      }
      throw new NotFoundException('Todo not found');
    } catch (error) {
      throw new BadRequestException();
    }
  }
  async deletetodo(id: string): Promise<Todo> {
    const ntodo = await this.todoModel.findOne({ id }).exec();
    if (ntodo) {
      return await this.todoModel.findByIdAndDelete(ntodo._id).exec();
    }
    throw new NotFoundException('Todo not found');
  }
}
