import { Controller, Get } from '@nestjs/common';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: any) {}
  @Get()
  async name() {
    return this.eventService.findAll();
  }
}
