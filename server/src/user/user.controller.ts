import { Controller, Get, Post, Body, Put, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { User } from 'src/user/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() update: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, update);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Post('login')
  async login(@Body() { email, password }: LoginDto) {
    return this.userService.login(email, password);
  }

}
