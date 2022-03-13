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
exports.PantrysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pantry_entity_1 = require("./entities/pantry.entity");
const users_service_1 = require("../users/users.service");
let PantrysService = class PantrysService {
    constructor(pantryRepo, userService) {
        this.pantryRepo = pantryRepo;
        this.userService = userService;
    }
    async create({ name, user }, auth) {
        user = this.userService.decodeToken(auth);
        const newPantry = this.pantryRepo.create({ name, user });
        return await this.pantryRepo.save(newPantry);
    }
    async findAll(auth) {
        const user = this.userService.decodeToken(auth);
        const { id } = user;
        return this.pantryRepo.find({ where: { user: id } });
    }
    async findOne(id, auth) {
        const user = this.userService.decodeToken(auth);
        const pantry = await this.pantryRepo.findOne(id, {
            relations: ['user'],
        });
        if (!pantry || pantry.user.id !== user.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        return pantry;
    }
    async update(id, { name }, auth) {
        const user = this.userService.decodeToken(auth);
        const pantry = await this.pantryRepo.findOne(id, {
            relations: ['user'],
        });
        if (!pantry || pantry.user.id !== user.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        const updatePantry = await this.pantryRepo.preload({
            id,
            name,
        });
        return this.pantryRepo.save(updatePantry);
    }
    async remove(id, auth) {
        const user = this.userService.decodeToken(auth);
        const pantry = await this.pantryRepo.findOne(id, {
            relations: ['user'],
        });
        if (!pantry || pantry.user.id !== user.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        this.pantryRepo.remove(pantry);
    }
};
PantrysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pantry_entity_1.Pantry)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PantrysService);
exports.PantrysService = PantrysService;
//# sourceMappingURL=pantrys.service.js.map