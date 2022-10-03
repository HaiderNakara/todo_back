import { AppService } from './app.service';
import { UpdatetodoDto } from './dto/update-cat.dto';
import { Todo } from './entities/app.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createtodo(createtodoDto: Todo): Promise<Todo>;
    findAlltodo(): Promise<Todo[]>;
    findtodoById(id: string): Promise<Todo>;
    updatetodo(id: string, updatetodoDto: UpdatetodoDto): Promise<Todo>;
    deletetodo(id: string): Promise<Todo>;
}
