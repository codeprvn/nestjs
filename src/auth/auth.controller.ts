import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { user } from './schemas/loginSchemas';


@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){

    }

@Post('login')
// for only on single auth api
// @UseGuards(AuthGuard)
async login (@Body() body:typeof user) {
    return await this.authService.login(body);
}

@Post('registration')
async reg (@Body() body:typeof user){
    return await this.authService.registration(body);
}

}
