import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  @ApiTags('Auth')
  @ApiOkResponse({
    description: 'Sign up end-point',
    type: User,
    isArray: false,
  })
  register(@Body() body: RegisterDto) {
    return this.userService.register(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiTags('Auth')
  @ApiOkResponse({
    description: 'Login end-point',
    type: User,
    isArray: false,
  })
  login(@Body() body: LoginDto) {
    return this.userService.login(body);
  }
}
