import { PantrysService } from 'src/pantrys/pantrys.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productRepo;
    private readonly pantryService;
    private readonly userService;
    constructor(productRepo: Repository<Product>, pantryService: PantrysService, userService: UsersService);
    create({ name, quantity }: CreateProductDto, auth: string, pantryId: number): Promise<Product>;
    findAll(pantryId: number, auth: string): Promise<Product[]>;
    findOne(pantryId: number, auth: string, id: number): Promise<Product>;
    update(id: number, { name, quantity }: UpdateProductDto, pantryId: number, auth: string): Promise<Product>;
    remove(id: number, pantryId: number, auth: string): Promise<void>;
}
