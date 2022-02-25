import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinregistrationModule } from './ninregistration/ninregistration.module';

@Module({
  imports: [NinregistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
