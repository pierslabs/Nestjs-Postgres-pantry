import { IsNumber, IsString } from 'class-validator';
import { Pantry } from 'src/pantrys/entities/pantry.entity';

export class CreateProductDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly quantity: string;

  @IsString()
  readonly pantry: Pantry;
}
