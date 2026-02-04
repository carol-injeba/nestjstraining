import { Global, Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

// @Global() -makes the module global scoped
@Module({
  controllers: [EventsController], // Registering EventsController
  providers: [EventsService], // Providing EventsService within this module
  exports: [EventsService], // Exporting EventsService to make it available outside this module
})
export class EventsModule {}
