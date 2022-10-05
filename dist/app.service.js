"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_entity_1 = require("./entities/app.entity");
let AppService = class AppService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    getHello() {
        return 'Hello World!';
    }
    async createtodo(todo) {
        const id = Math.floor(1000 + Math.random() * 9000);
        const newtodo = new this.todoModel(Object.assign({ id }, todo));
        return await newtodo.save();
    }
    async findAlltodos() {
        return await this.todoModel.find().exec();
    }
    async findtodoById(id) {
        try {
            const temp = await this.todoModel.findOne({
                id,
            }).exec();
            if (temp) {
                return temp;
            }
            throw new common_1.NotFoundException('Todo not found');
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
    async updatetodo(id, todo) {
        try {
            const ntodo = await this.todoModel.findOne({ id }).exec();
            if (ntodo) {
                return await this.todoModel.findByIdAndUpdate(ntodo._id, todo, { new: true }).exec();
            }
            throw new common_1.NotFoundException('Todo not found');
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
    async deletetodo(id) {
        const ntodo = await this.todoModel.findOne({ id }).exec();
        if (ntodo) {
            return await this.todoModel.findByIdAndDelete(ntodo._id).exec();
        }
        throw new common_1.NotFoundException('Todo not found');
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(app_entity_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map