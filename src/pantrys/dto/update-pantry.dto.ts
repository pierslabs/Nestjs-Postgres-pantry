import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePantryDto } from './create-pantry.dto';

export class UpdatePantryDto extends PartialType(CreatePantryDto) {
  @IsString()
  readonly name: string;
}
