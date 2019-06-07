import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({//declaracion del modulo, donde se cargaran los servicios y los controladores
  imports: [],//Modulos, dependencias, diferentes componentes que usaremos en este modulo
  controllers: [AppController],//Los controladores que forman parte de este modulo
  providers: [AppService],//Los servicios donde se encuentran los metodos de acceso a los datos
})
export class AppModule {}
