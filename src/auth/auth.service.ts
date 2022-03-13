import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async signUp({ name, email, password }: CreateAuthDto) {
    const newUser: User = this.userRepo.create({ name, email, password });

    return await this.userRepo.save(newUser);
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userRepo.findOne({ email });

    if (!user) {
      throw new UnauthorizedException();
    }

    const truePass = await user.validatePassword(password);

    if (!truePass) {
      throw new UnauthorizedException();
    }

    return { Authorization: user.createToken(user, 'hola', '24h') };
  }
}
