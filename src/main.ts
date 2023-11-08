import { NestFactory } from '@nestjs/core';
import { MoviesModule } from './core/movies/movies.module';

async function bootstrap() {
  const app = await NestFactory.create(MoviesModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
