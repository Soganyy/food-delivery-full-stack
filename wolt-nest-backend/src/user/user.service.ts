import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userEntity: Repository<User>,
  ) {}

  async register(body: RegisterDto) {
    console.log('register');

    const isUserExist = await this.userEntity.findOne({
      where: { email: body.email },
    });
    if (isUserExist)
      throw new HttpException(
        'This user already exists',
        HttpStatus.BAD_REQUEST,
      );

    const user = this.userEntity.create(body);
    const result = await this.userEntity.save(user);

    return result;
  }

  async login(body: LoginDto) {
    const user = await this.userEntity.findOne({
      where: { email: body.email },
      select: ['id', 'email', 'password', 'firstName', 'lastName'],
    });

    if (!user)
      throw new HttpException(
        "User with this credentials doesn't exist!",
        HttpStatus.BAD_REQUEST,
      );

    if (user.password !== body.password)
      throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST);

    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    return payload;
  }
}
