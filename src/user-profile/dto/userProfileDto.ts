import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserProfileDto{    

@IsString()    
@IsNotEmpty()    
firstName: string

@IsString()
@IsNotEmpty()
lastName: string

@IsEmail()
@IsNotEmpty()
emailId: string

@IsInt()
@IsNotEmpty()
dateOfBirth: number

@MinLength(5)
@IsNotEmpty()
userName: string


@IsNotEmpty()
password: string

@IsNotEmpty()
confirmPassword: string

}