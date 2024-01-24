import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'; 

@Module({
  imports: [
    //config env file
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    // config mongoDb
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
