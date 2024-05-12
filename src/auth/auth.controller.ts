import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() UserDto: CreateUserDto){
        return this.authService.login(UserDto)
    }
    @Post('/registration')
    registration(@Body() UserDto: CreateUserDto){
        return this.authService.registration(UserDto)
    }

}
