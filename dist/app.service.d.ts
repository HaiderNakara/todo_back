import { Model } from 'mongoose';
import { UpdatetodoDto } from './dto/update-cat.dto';
import { Todo } from './entities/app.entity';
export declare class AppService {
    private readonly todoModel;
    constructor(todoModel: Model<Todo>);
    getHello(): string;
    createtodo(todo: Todo): Promise<Todo>;
    findAlltodos(): Promise<Todo[]>;
    findtodoById(id: string): Promise<Todo>;
    updatetodo(id: string, todo: UpdatetodoDto): Promise<Todo>;
    deletetodo(id: string): Promise<Todo>;
}
