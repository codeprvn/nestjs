import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userProfileSchema } from './schema/userProfileSchema';

@Injectable()
export class UserProfileService {
    constructor(@InjectModel('userProfile') private userProfileModal: Model<typeof userProfileSchema>){

    }

  async creatUserService(body:any, user:any){
    try{
      if(body.password === body.confirmPassword) throw new NotAcceptableException('Password not matching')
    let userData:any = await this.userProfileModal.findOne({$or:
      [
        {userName: body.userName},
        {mobile: body.mobile},
        {emailId: body.emailId}
    ]
    })
    if(userData?.userName === body.userName) throw new NotAcceptableException('Username Already exits');
    if(userData?.mobile === body.mobile) throw new NotAcceptableException('Mobile Already exits');
    if(userData?.emailId === body?.emailId) throw new NotAcceptableException('emailId Already exits');

    const newUser = await this.userProfileModal.create(body);
    if (!newUser)  throw new NotAcceptableException('Unable to create...')
    return {message: 'user created...'};
  }
    catch(err){
      throw err;
    }

  }

  async getUserSerive(param :any){
    try{
    let userData:any = await this.userProfileModal.findOne({userName:param.userName})
    if (!userData) throw new NotAcceptableException('User not Found');
    if (userData) return {data: userData}}
    catch (err){
      throw err;
    }

  }
 
 async updateUserService(body:any, param:any){
  try {
    let userData: any = await this.userProfileModal.findByIdAndUpdate(param.id, body, { new: true });
    if (!userData) throw new NotAcceptableException('User not Found');
   return { message:'Successfuly Updated...'}
  } catch (err) {
    throw err;
  }
}
 

 async deleteUserService(param:any){
  try{
    let userData: any = await this.userProfileModal.findByIdAndDelete(param.id)
    if (userData && !userData.deletedCount) throw new NotAcceptableException('User not Found');
    if(userData && userData.deletedCount) return { message:'Successfuly deleted...'};
    throw new NotAcceptableException('Unable to delete...');
  }catch(err){
    throw err;
  }

 }

 async getUserWithQuery(query : any){
console.log(query)
 }

}
