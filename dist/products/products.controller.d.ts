import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, auth: any, pantryId: any): Promise<Product>;
    findAll(pantryId: any, auth: any): Promise<Product[]>;
    findOne(pantryId: any, auth: any, id: any): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto, pantryId: any, auth: any): Promise<Product>;
    remove(id: string, pantryId: any, auth: any): Promise<void>;
}
