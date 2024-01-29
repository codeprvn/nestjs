import mongoose from "mongoose";

export const userProfileSchema = new mongoose.Schema({
  
firstName: String,
lastName: String,
emailId: String,
mobile: String,
dateOfBirth: Number,
userName: String,
password: String
}, {collection: 'userProfile'})