import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Aca se define la instancia del nest factory para crear la api
  //Se conecta al modulo principal de la aplicacion
  const app = await NestFactory.create(AppModule);
  //Escucha en el puerto 3000
  await app.listen(3000);
}
bootstrap();
