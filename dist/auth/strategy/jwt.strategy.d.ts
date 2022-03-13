import { Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { IJwtPayload } from '../jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    validate(payload: IJwtPayload): Promise<IJwtPayload>;
}
export {};
