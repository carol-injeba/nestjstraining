import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { greeter } from './greeter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(greeter); // Register the greeter middleware - global
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
