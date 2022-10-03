import { PartialType } from "@nestjs/swagger";
import { Todo } from "src/entities/app.entity";

export class UpdatetodoDto extends PartialType(Todo) { }
