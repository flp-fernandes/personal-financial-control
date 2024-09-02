import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  async login(loginDto: any) {
    return 'This action logs a user in';
  }
}
