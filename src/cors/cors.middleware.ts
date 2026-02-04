import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('CORS Middleware active');
    next();

    // res.send('This request is blocked by CORS middleware');
  }
}
