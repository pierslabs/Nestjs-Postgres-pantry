import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as jwt from 'jsonwebtoken';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepo.findOne(id);
  }

  async findByEmail(email: string): Promise<any> {
    return this.userRepo.findOne({ email });
  }

  async update(id: number, { name, email, password }: UpdateUserDto) {
    const user: User = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException('Resource not found');
    }

    const updateUser = await this.userRepo.preload({
      id,
      name,
      email,
      password,
    });

    return this.userRepo.save(updateUser);
  }

  async remove(id: number): Promise<void> {
    const user = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException('resource not found');
    }

    this.userRepo.remove(user);
  }

  decodeToken(auth: string): User {
    const token = auth.replace('Bearer ', '');

    const user: any = jwt.verify(token, 'hola');

    if (!user.id) {
      throw new NotFoundException('your token has been expired');
    }

    return user;
  }
}
