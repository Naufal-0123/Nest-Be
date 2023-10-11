import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BookModule } from './book/book.module';
import { AuthController } from './app/auth/auth.controller';
import { AuthService } from './app/auth/auth.service';
import { AuthModule } from './app/auth/auth.module';
import { MailModule } from './app/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BookModule, AuthModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
