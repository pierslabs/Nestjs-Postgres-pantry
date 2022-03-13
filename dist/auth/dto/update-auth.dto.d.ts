import { CreateAuthDto } from './create-auth.dto';
declare const UpdateAuthDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAuthDto>>;
export declare class UpdateAuthDto extends UpdateAuthDto_base {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly hash: string;
    readonly hashRT: string;
}
export {};
