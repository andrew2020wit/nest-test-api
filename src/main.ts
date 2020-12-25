import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Nest Test Api')
    .setDescription('Nest Test Api description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log('== Api test server is running at port:', port);
}
bootstrap();
