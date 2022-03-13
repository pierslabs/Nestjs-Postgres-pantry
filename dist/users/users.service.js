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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt = require("jsonwebtoken");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findAll() {
        return await this.userRepo.find();
    }
    async findOne(id) {
        return await this.userRepo.findOne(id);
    }
    async findByEmail(email) {
        return this.userRepo.findOne({ email });
    }
    async update(id, { name, email, password }) {
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Resource not found');
        }
        const updateUser = await this.userRepo.preload({
            id,
            name,
            email,
            password,
        });
        return this.userRepo.save(updateUser);
    }
    async remove(id) {
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('resource not found');
        }
        this.userRepo.remove(user);
    }
    decodeToken(auth) {
        const token = auth.replace('Bearer ', '');
        const user = jwt.verify(token, 'hola');
        if (!user.id) {
            throw new common_1.NotFoundException('your token has been expired');
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map