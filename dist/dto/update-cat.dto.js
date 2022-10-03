"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatetodoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const app_entity_1 = require("../entities/app.entity");
class UpdatetodoDto extends (0, swagger_1.PartialType)(app_entity_1.Todo) {
}
exports.UpdatetodoDto = UpdatetodoDto;
//# sourceMappingURL=update-cat.dto.js.map