import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsString()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly hash: string;

  @IsString()
  readonly hashRT: string;
}
