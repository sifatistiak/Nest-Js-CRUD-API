import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'This Is Sign Up' };
  }
  signin() {
    return { msg: 'This Is Sign In' };
  }
}
