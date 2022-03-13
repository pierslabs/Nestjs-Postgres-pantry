import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<any>;
    update(id: number, { name, email, password }: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    decodeToken(auth: string): User;
}
