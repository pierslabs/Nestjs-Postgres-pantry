import { Strategy } from 'passport-jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JWTPayload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: JWTPayload): Promise<CreateUserDto>;
}
export {};
