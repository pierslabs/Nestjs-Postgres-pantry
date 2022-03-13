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
exports.PantrysController = void 0;
const common_1 = require("@nestjs/common");
const pantrys_service_1 = require("./pantrys.service");
const create_pantry_dto_1 = require("./dto/create-pantry.dto");
const update_pantry_dto_1 = require("./dto/update-pantry.dto");
const passport_1 = require("@nestjs/passport");
let PantrysController = class PantrysController {
    constructor(pantrysService) {
        this.pantrysService = pantrysService;
    }
    create(createPantryDto, auth) {
        return this.pantrysService.create(createPantryDto, auth);
    }
    findAll(auth) {
        return this.pantrysService.findAll(auth);
    }
    findOne(id, auth) {
        return this.pantrysService.findOne(+id, auth);
    }
    update(id, updatePantryDto, auth) {
        return this.pantrysService.update(+id, updatePantryDto, auth);
    }
    remove(id, auth) {
        return this.pantrysService.remove(+id, auth);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pantry_dto_1.CreatePantryDto, Object]),
    __metadata("design:returntype", Promise)
], PantrysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PantrysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PantrysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pantry_dto_1.UpdatePantryDto, String]),
    __metadata("design:returntype", Promise)
], PantrysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PantrysController.prototype, "remove", null);
PantrysController = __decorate([
    (0, common_1.Controller)('pantrys'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [pantrys_service_1.PantrysService])
], PantrysController);
exports.PantrysController = PantrysController;
//# sourceMappingURL=pantrys.controller.js.map