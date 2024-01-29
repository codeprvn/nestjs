import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileDto } from './dto/userProfileDto';
import { AuthGuard } from 'src/auth/guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('user-profile')
export class UserProfileController {
    constructor(private userProfileService : UserProfileService){}

 @Post()
 async creatUser(@Body() body:UserProfileDto ,@Req() req:any){
    return this.userProfileService.creatUserService(body, req.user)
 } 


 @Get('query')
 async getUserWithQuery(@Query() query:any){
    return this.userProfileService.getUserWithQuery(query)
 }

 @Get(':userName')
 async getUser(@Param() param:any){
    return this.userProfileService.getUserSerive(param)
 }

@Put(':id')
async updateUser(@Body() body:UserProfileDto, @Param() param:any){
    return this.userProfileService.updateUserService(body, param)
}

@Delete(':id')
async deleteUser(@Param() param:any){
    return this.userProfileService.deleteUserService(param)
}

}
