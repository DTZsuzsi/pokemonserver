import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_name: String,
  password: String,
  createdAt: Date
});

export default model('User', UserSchema);
