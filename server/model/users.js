import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_name: String,
  user_fullName: String,
  password: String,
  pokemons: Object,
  createdAt: Date
});

export default model('User', UserSchema, 'poke-war-users');
