import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/login.dto';
import { RegisterUserDto } from '../auth/dto/userRegister.dto';
import { RolesEnum } from 'src/enums/roles.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userEntity: Repository<User>,
  ) {}

  async findOne(body: LoginDto) {
    const user = await this.userEntity.findOne({
      where: { email: body.email },
    });
    if (!user)
      throw new HttpException("The user doesn't exist", HttpStatus.BAD_REQUEST);

    return user;
  }

  async createUser(body: RegisterUserDto) {
    const isUserExist = await this.userEntity.findOne({
      where: { email: body.email },
    });
    if (isUserExist)
      throw new HttpException(
        'This user already exists',
        HttpStatus.BAD_REQUEST,
      );

    const user = this.userEntity.create({ ...body, role: RolesEnum.User });
    const result = await this.userEntity.save(user);

    return result;
  }

  async getUserById(id: number) {
    const user = await this.userEntity.findOne({
      where: { id: id },
    });
    if (!user)
      throw new HttpException("The user doesn't exist", HttpStatus.BAD_REQUEST);

    return user;
  }
}
