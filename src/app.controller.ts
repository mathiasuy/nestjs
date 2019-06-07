import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//Entre los parentesis puede ir la parte de la url que va al controlador
export class AppController {
  
  //Constructor donde recibimos por injecci[on de dependencia el servicio, como si fuese un @Autowired (?)
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
