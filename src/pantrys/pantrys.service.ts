import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pantry } from './entities/pantry.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PantrysService {
  // constructor
  constructor(
    @InjectRepository(Pantry) private readonly pantryRepo: Repository<Pantry>,
    private readonly userService: UsersService,
  ) {}

  async create({ name, user }: CreatePantryDto, auth: string) {
    user = this.userService.decodeToken(auth);

    const newPantry = this.pantryRepo.create({ name, user });

    return await this.pantryRepo.save(newPantry);
  }

  async findAll(auth: string): Promise<Pantry[]> {
    const user = this.userService.decodeToken(auth);
    const { id } = user;

    return this.pantryRepo.find({ where: { user: id } });
  }

  async findOne(id: number, auth: string): Promise<Pantry> {
    const user: User = this.userService.decodeToken(auth);

    const pantry: Pantry = await this.pantryRepo.findOne(id, {
      relations: ['user'],
    });

    if (!pantry || pantry.user.id !== user.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    return pantry;
  }

  async update(
    id: number,
    { name }: UpdatePantryDto,
    auth: string,
  ): Promise<Pantry> {
    const user: User = this.userService.decodeToken(auth);

    const pantry: Pantry = await this.pantryRepo.findOne(id, {
      relations: ['user'],
    });

    if (!pantry || pantry.user.id !== user.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    const updatePantry: Pantry = await this.pantryRepo.preload({
      id,
      name,
    });

    return this.pantryRepo.save(updatePantry);
  }

  async remove(id: number, auth: string): Promise<void> {
    const user: User = this.userService.decodeToken(auth);

    const pantry: Pantry = await this.pantryRepo.findOne(id, {
      relations: ['user'],
    });

    if (!pantry || pantry.user.id !== user.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    this.pantryRepo.remove(pantry);
  }
}
