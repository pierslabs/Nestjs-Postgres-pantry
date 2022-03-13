import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
export declare class CreatePantryDto {
    id: number;
    name: string;
    user: User;
    products: Product[];
}
