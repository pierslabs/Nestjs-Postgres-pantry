import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    signUp({ name, email, password }: CreateAuthDto): Promise<User>;
    signIn(email: string, password: string): Promise<any>;
}
