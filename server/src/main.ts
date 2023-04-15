import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  const config = new DocumentBuilder()
    .setTitle('Lost & Found')
    .setDescription('Welcome to the Lost & Found API, a platform for connecting people who have lost or found items. Our API allows users to create and browse lost and found item listings, search for items based on location and category, and connect with the owners or finders of lost items.')
    .setVersion('1.0')
    .addTag('lostfound')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
