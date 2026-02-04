import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { EventsModule } from './events/events.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { CorsMiddleware } from './cors/cors.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule, EventsModule],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, CorsMiddleware)
      // .forRoutes('*')
      // .forRoutes('events')
      // .forRoutes({path: 'courses', method: 0})
      .forRoutes(AppController);
  }
}
