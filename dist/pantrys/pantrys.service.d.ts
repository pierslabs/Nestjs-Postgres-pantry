import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { Repository } from 'typeorm';
import { Pantry } from './entities/pantry.entity';
import { UsersService } from 'src/users/users.service';
export declare class PantrysService {
    private readonly pantryRepo;
    private readonly userService;
    constructor(pantryRepo: Repository<Pantry>, userService: UsersService);
    create({ name, user }: CreatePantryDto, auth: string): Promise<Pantry>;
    findAll(auth: string): Promise<Pantry[]>;
    findOne(id: number, auth: string): Promise<Pantry>;
    update(id: number, { name }: UpdatePantryDto, auth: string): Promise<Pantry>;
    remove(id: number, auth: string): Promise<void>;
}
