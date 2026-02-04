import { Module } from '@nestjs/common';
import { EventController } from './event/event.controller';
import { EventsModule } from 'src/events/events.module';

@Module({
  controllers: [EventController],
  exports: [EventsModule],
})
export class StudentModule {}
