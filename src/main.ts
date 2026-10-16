import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
// Perhatikan penulisan folder 'interceptors' (atau sesuaikan dengan folder Anda) dan 'transform'
import { TrsnsformResponseInterceptor } from './interceptore/trsnsform-response/trsnsform-response.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { 
        enableImplicitConversion: true,
      }
    })
  );

  // Menambahkan interceptor dengan instance yang benar
  app.useGlobalInterceptors(new TrsnsformResponseInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();