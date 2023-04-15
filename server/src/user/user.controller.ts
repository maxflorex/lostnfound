import { Controller, Get, Post, Body, Put, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { User } from 'src/user/user.schema';
import { UserService } from './user.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User
  })
  @ApiBadRequestResponse({
    description: 'User was not registered. Try again.'
  })
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }



  @Get()
  @ApiOkResponse({
    description: 'Retrieved list of users',
    type: [User]
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }



  @Put(':id')
  @ApiOkResponse({
    description: 'Updated user object as response',
    type: User
  })
  @ApiBadRequestResponse({
    description: 'User was not updated. Try again.'
  })
  async updateUser(@Param('id') id: string, @Body() update: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, update);
  }


  @Delete(':id')
  @ApiOkResponse({
    description: 'Deleted user object as response',
    type: User
  })
  @ApiBadRequestResponse({
    description: 'User was not deleted. Try again.'
  })
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }


  @Post('login')
  @ApiOkResponse({
    description: 'Logged in user object as response',
    type: User
  })
  @ApiBadRequestResponse({
    description: 'User was not logged in. Try again.'
  })
  async login(@Body() { email, password }: LoginDto) {
    return this.userService.login(email, password);
  }

}
