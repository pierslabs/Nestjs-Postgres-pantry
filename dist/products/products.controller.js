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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const passport_1 = require("@nestjs/passport");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto, auth, pantryId) {
        return this.productsService.create(createProductDto, auth, pantryId);
    }
    findAll(pantryId, auth) {
        return this.productsService.findAll(pantryId, auth);
    }
    findOne(pantryId, auth, id) {
        return this.productsService.findOne(pantryId, auth, id);
    }
    update(id, updateProductDto, pantryId, auth) {
        return this.productsService.update(+id, updateProductDto, pantryId, auth);
    }
    remove(id, pantryId, auth) {
        return this.productsService.remove(+id, pantryId, auth);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __param(2, (0, common_1.Param)('pantryid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('pantryid')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('pantryid')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('pantryid')),
    __param(3, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('pantryid')),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
ProductsController = __decorate([
    (0, common_1.Controller)(':pantryid/products'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map