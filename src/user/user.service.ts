import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: {
    email: string;
    firstname: string;
    lastname: string;
  }) {
    return await this.prismaService.user.create({ data });
  }
}
