import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Middleware } from './middleware/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, stopAtFirstError: true }));
  // for globally use of middleware
  app.use(new Middleware().use);
  console.log(`App is listening on  port: ${process.env.PORT}`)
  await app.listen(process.env.PORT);
}
bootstrap();
