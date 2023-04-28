import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Exception handler
  app.useGlobalFilters(new BaseExceptionFilter());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
