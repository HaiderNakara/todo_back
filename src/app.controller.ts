import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdatetodoDto } from './dto/update-cat.dto';
import { Todo } from './entities/app.entity';

@Controller('api/todo')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('')
  createtodo(@Body() createtodoDto: Todo) {
    return this.appService.createtodo(createtodoDto);
  }
  @Get('')
  findAlltodo() {
    return this.appService.findAlltodos();
  }
  @Get(':id')
  findtodoById(@Param('id') id: string) {
    return this.appService.findtodoById(id);
  }
  @Patch(':id')
  updatetodo(@Param('id') id: string, @Body() updatetodoDto: UpdatetodoDto) {
    return this.appService.updatetodo(id, updatetodoDto);
  }
  @Delete(':id')
  deletetodo(@Param('id') id: string) {
    return this.appService.deletetodo(id);
  }
}