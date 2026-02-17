import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.createUser(body);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }
  
   @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
