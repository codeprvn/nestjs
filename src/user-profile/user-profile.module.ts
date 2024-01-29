import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { userProfileSchema } from './schema/userProfileSchema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name: 'userProfile', schema: userProfileSchema }])],
  controllers: [UserProfileController],
  providers:[UserProfileService,
  //   {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard
  // }
]
})
export class UserProfileModule {}
