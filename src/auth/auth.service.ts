import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user } from './schemas/loginSchemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectModel('user') private userModel: Model<typeof user>,
    private jwtService : JwtService){

    }

  async login (body:any){
    try {
        const login: any = await this.userModel.findOne({ userName: body.userName }, 'password userName -_id');
       if (!login) {
          throw new NotFoundException('User not found');
        }
    
        if (login.password !== body.password) {
          throw new UnauthorizedException('Incorrect username or password');
        }
    
        // Return the user or some relevant data
        const payload = { userName: login.userName, email: login.email};
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      } catch (err) {

        throw err;
      }
    }

    async registration (body: any){
        try{
            const registration: any = await this.userModel.findOne({$or: [
                {userName: body.userName},
                {mobileNo: body.mobileNo},
                {email: body.email}
            ]});

            if(registration){
                if(registration.userName == body.userName)  throw new NotAcceptableException(['Username alrady exits']);
                if(registration.email == body.email)  throw new NotAcceptableException(['Email alrady exits']);
                if(registration.mobileNo == body.mobileNo)  throw new NotAcceptableException(['Mobileno alrady exits']);
            } 

            const newRegistratio = await  this.userModel.create(body);

            if(newRegistratio) return {message: 'user created...'};

            throw new NotAcceptableException(['Unable to connect']);


        }catch(err){
            throw err
        }

    }

}
