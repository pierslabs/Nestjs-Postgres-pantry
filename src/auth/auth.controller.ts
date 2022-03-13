import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createAuthDTO: CreateAuthDto) {
    return this.authService.signUp(createAuthDTO);
  }

  @Post('/signin')
  signIn(@Body() { email, password }: CreateAuthDto) {
    return this.authService.signIn(email, password);
  }

  // @Post()
  // logOut() {
  //   return this.authService.logOut;
  // }

  // @Post()
  // refreshToken() {
  //   return this.authService.refreshToken;
  // }
}
