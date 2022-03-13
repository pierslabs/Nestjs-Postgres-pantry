import { Pantry } from 'src/pantrys/entities/pantry.entity';
export declare class CreateProductDto {
    readonly id: number;
    readonly name: string;
    readonly quantity: string;
    readonly pantry: Pantry;
}
