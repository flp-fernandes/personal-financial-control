import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { OperationModule } from './operation/operation.module';
import { CategoryModule } from './category/category.module';
import { DescriptionModule } from './description/description.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    HealthCheckModule,
    OperationModule,
    CategoryModule,
    DescriptionModule,
    TransactionModule,
    UserModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
