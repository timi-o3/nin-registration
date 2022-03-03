import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home.html')
    getHome(): {} {
      return this.appService.getHome();
    }
  
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
}
