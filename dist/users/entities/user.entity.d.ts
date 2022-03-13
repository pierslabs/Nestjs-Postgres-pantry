import { Pantry } from 'src/pantrys/entities/pantry.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    pantrys: Pantry[];
    createdAt: Date;
    updateAt: Date;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
    createToken(user: {
        id: number;
        email: string;
        name: string;
    }, secret: string, expiresIn: string): string;
}
