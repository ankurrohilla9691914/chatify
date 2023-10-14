import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  posts: {
    type: Array,
    default: [],
  },
});

const User = model("user", UserSchema);
// module.exports = UserModel;
export default User;
