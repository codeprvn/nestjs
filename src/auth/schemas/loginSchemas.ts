import mongoose from "mongoose";

export const user = new mongoose.Schema({
    userName : String,
    password : String,
    email : String,
    mobileNo : String,
    createdAt : {
        type: String,
        default: Date.now()
    }
  }, {collection: 'users'});