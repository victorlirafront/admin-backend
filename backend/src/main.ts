import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: ['http://localhost:3000', 'http://localhost:3001'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });

    const PORT = process.env.DB_PORT || 3002;
    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

bootstrap();
