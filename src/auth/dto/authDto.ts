import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{

@IsString({message: "Should be string" })
@IsNotEmpty()
userName:string

@IsNotEmpty()
password:string

@IsEmail()
@IsNotEmpty()
email:string

@IsNotEmpty()
mobileNo:string


}