import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { PantrysService } from './pantrys.service';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { Pantry } from './entities/pantry.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('pantrys')
@UseGuards(AuthGuard('jwt'))
export class PantrysController {
  constructor(private readonly pantrysService: PantrysService) {}

  @Post()
  create(
    @Body() createPantryDto: CreatePantryDto,
    @Headers('Authorization') auth,
  ): Promise<Pantry> {
    return this.pantrysService.create(createPantryDto, auth);
  }

  @Get()
  findAll(@Headers('Authorization') auth: string): Promise<Pantry[]> {
    return this.pantrysService.findAll(auth);
  }

  @Get(':id')
  findOne(
    @Param('id') id: number,
    @Headers('Authorization') auth: string,
  ): Promise<Pantry> {
    return this.pantrysService.findOne(+id, auth);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePantryDto: UpdatePantryDto,
    @Headers('Authorization') auth: string,
  ): Promise<Pantry> {
    return this.pantrysService.update(+id, updatePantryDto, auth);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Headers('Authorization') auth: string,
  ): Promise<void> {
    return this.pantrysService.remove(+id, auth);
  }
}
