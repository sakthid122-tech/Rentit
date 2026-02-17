import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  app.useGlobalFilters({
  catch(exception, host) {
    console.log("ERROR:", exception);
  }
} as any);


  await app.listen(3000);
  console.log('🚀 Backend running on http://localhost:3000');
}
bootstrap();
