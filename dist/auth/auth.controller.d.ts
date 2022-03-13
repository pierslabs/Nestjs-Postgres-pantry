import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createAuthDTO: CreateAuthDto): Promise<import("../users/entities/user.entity").User>;
    signIn({ email, password }: CreateAuthDto): Promise<any>;
}
