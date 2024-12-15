import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
    const isDevelopment = ENVIRONMENT === 'development';

    app.enableCors({
      origin: isDevelopment
        ? ['http://localhost:3000', 'http://localhost:3001']
        : ['https://bossa-nova-solutions-challenge-production.up.railway.app'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });

    const PORT = process.env.API_PORT || 3003;
    await app.listen(PORT);

    console.log(
      `Server is running on ${
        isDevelopment
          ? `http://localhost:${PORT}`
          : 'https://bossa-nova-solutions-challenge-production.up.railway.app'
      }`,
    );
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

bootstrap();
