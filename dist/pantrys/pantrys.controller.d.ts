import { PantrysService } from './pantrys.service';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { Pantry } from './entities/pantry.entity';
export declare class PantrysController {
    private readonly pantrysService;
    constructor(pantrysService: PantrysService);
    create(createPantryDto: CreatePantryDto, auth: any): Promise<Pantry>;
    findAll(auth: string): Promise<Pantry[]>;
    findOne(id: number, auth: string): Promise<Pantry>;
    update(id: string, updatePantryDto: UpdatePantryDto, auth: string): Promise<Pantry>;
    remove(id: string, auth: string): Promise<void>;
}
