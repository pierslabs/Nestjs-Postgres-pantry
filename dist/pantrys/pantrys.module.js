"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantrysModule = void 0;
const common_1 = require("@nestjs/common");
const pantrys_service_1 = require("./pantrys.service");
const pantrys_controller_1 = require("./pantrys.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pantry_entity_1 = require("./entities/pantry.entity");
const users_module_1 = require("../users/users.module");
let PantrysModule = class PantrysModule {
};
PantrysModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pantry_entity_1.Pantry]), users_module_1.UsersModule],
        controllers: [pantrys_controller_1.PantrysController],
        providers: [pantrys_service_1.PantrysService],
        exports: [pantrys_service_1.PantrysService],
    })
], PantrysModule);
exports.PantrysModule = PantrysModule;
//# sourceMappingURL=pantrys.module.js.map