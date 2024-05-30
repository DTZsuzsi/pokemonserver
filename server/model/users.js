import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_name: {type: String, default:''},
  user_fullName: {type: String, default: ''},
  password: {type: String, default: ''},
  pokemons: {type: Object, default: {}},
  createdAt: Date
});

export default model('User', UserSchema, 'poke-war-users');
