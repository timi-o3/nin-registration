import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinregistrationModule } from './ninregistration/ninregistration.module';

@Module({
  imports: [TypeOrmModule.forRoot(), NinregistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
