import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly quantity?: string;
}
