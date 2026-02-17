import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data: { name: string; email: string; password: string }) {
    return this.prisma.user.create({ data });
  }

  getAllUsers() {
    return this.prisma.user.findMany({
      orderBy: { id: 'asc' },
    });
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
