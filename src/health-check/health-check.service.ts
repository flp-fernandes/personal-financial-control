import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HealthCheckService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkDatabaseConnection() {
    await this.prismaService.$queryRaw`SELECT 1;`;

    return {
      status: 'ok',
      message: 'Database connection is healthy',
    };
  }
}
