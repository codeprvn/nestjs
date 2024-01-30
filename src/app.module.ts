import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { UserProfileModule } from './user-profile/user-profile.module';


//middleware
import { Middleware } from './middleware/middleware';

@Module({
  imports: [
    //config env file
    ConfigModule.forRoot({
      envFilePath: '.env', isGlobal:true
    }),
    // config mongoDb
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule,
    UserProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 // another way to use middleware 
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(Middleware)
//       .forRoutes(  { path: '*', method: RequestMethod.ALL });
// }
}
