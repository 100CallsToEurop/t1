import { NestFactory } from '@nestjs/core';
import { AppModule } from './features/app.module';
import { ConfigService } from '@nestjs/config';
import { appSetup } from './core/setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appSetup(app);
  const port = new ConfigService().get('PORT') || 3000;
  const host = new ConfigService().get('PG_HOST');

  await app.listen(port, () => {
    console.log(`Server started on port: ${port}, database host: ${host}`);
  });
}
bootstrap();
