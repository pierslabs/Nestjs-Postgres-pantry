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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pantrys_service_1 = require("../pantrys/pantrys.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productRepo, pantryService, userService) {
        this.productRepo = productRepo;
        this.pantryService = pantryService;
        this.userService = userService;
    }
    async create({ name, quantity }, auth, pantryId) {
        const pantry = await this.pantryService.findOne(pantryId, auth);
        const newProduct = this.productRepo.create({ name, quantity, pantry });
        return this.productRepo.save(newProduct);
    }
    async findAll(pantryId, auth) {
        const pantry = await this.pantryService.findOne(pantryId, auth);
        if (!pantry) {
            throw new common_1.NotFoundException('has not privileges');
        }
        return await this.productRepo.find({ where: { pantry: pantryId } });
    }
    async findOne(pantryId, auth, id) {
        const pantry = await this.pantryService.findOne(pantryId, auth);
        const product = await this.productRepo.findOne(+id, {
            relations: ['pantry'],
        });
        if (!product || pantry.id !== product.pantry.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        return product;
    }
    async update(id, { name, quantity }, pantryId, auth) {
        const pantry = await this.pantryService.findOne(pantryId, auth);
        const product = await this.productRepo.findOne(+id, {
            relations: ['pantry'],
        });
        if (!product || pantry.id !== product.pantry.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        const updateProduct = await this.productRepo.preload({
            id,
            name,
            quantity,
        });
        return this.productRepo.save(updateProduct);
    }
    async remove(id, pantryId, auth) {
        const product = await this.productRepo.findOne(id, {
            relations: ['pantry'],
        });
        const pantry = await this.pantryService.findOne(pantryId, auth);
        if (!product || pantry.id !== product.pantry.id) {
            throw new common_1.NotFoundException('resource not found or has not privileges');
        }
        this.productRepo.remove(product);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        pantrys_service_1.PantrysService,
        users_service_1.UsersService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map