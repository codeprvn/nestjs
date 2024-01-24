import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { user } from './schemas/loginSchemas';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from './guard/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports:[
      // injeacting Mongoose module
      MongooseModule.forFeature([{ name: 'user', schema: user }]),
    // env Config
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    // jwt config
    JwtModule.register({
      global:true,
      secret:process.env.SECRET,
      signOptions: { expiresIn: '500000s' },
    })],
  controllers: [AuthController],
  providers: [AuthService
    // globally Authgard for all apis
    // {provide: APP_GUARD,
    // useClass: AuthGuard,}
  ]
})
export class AuthModule {}
