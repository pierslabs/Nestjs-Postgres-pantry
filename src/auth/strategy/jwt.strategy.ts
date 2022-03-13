import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { IJwtPayload } from '../jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'hola',
    });
  }

  async validate(payload: IJwtPayload) {
    const { email } = payload;
    const user = await this.userRepo.findOne({ email });

    if (!user) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
