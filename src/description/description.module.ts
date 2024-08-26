import { Module } from '@nestjs/common';
import { DescriptionController } from './description.controller';
import { DescriptionService } from './description.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DescriptionController],
  providers: [DescriptionService],
})
export class DescriptionModule {}
