import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('vegeStore/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove the field that are not in Dto
      forbidNonWhitelisted: true, // throw an error is field does not exits in dto
    }),
  );

  app.enableCors();

  const port = process.env.PORT || 3000;

  await app.listen(port).then(() => {
    console.log(`Application is working on port ${port}`);
  });
}
bootstrap();
