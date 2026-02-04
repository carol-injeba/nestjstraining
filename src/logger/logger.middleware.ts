import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    console.log(
      'Request received arrived at:',
      new Date().toLocaleDateString(),
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));
    next();
    console.log('Response sent at:', new Date().toLocaleDateString());
  }
}
