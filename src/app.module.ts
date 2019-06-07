import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasController } from './mascotas/mascotas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({//declaracion del modulo, donde se cargaran los servicios y los controladores
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'demo_nest_veterinaria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],//Modulos, dependencias, diferentes componentes que usaremos en este modulo
  controllers: [AppController, MascotasController],//Los controladores que forman parte de este modulo
  providers: [AppService],//Los servicios donde se encuentran los metodos de acceso a los datos
})
export class AppModule {}
