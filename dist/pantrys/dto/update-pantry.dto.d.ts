import { CreatePantryDto } from './create-pantry.dto';
declare const UpdatePantryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePantryDto>>;
export declare class UpdatePantryDto extends UpdatePantryDto_base {
    readonly name: string;
}
export {};
