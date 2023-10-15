import User from "../../models/userModel.js";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";

dotenv.config();

export const signupUser = async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.send(422).json({ message: "please enter all the fields" });
  } else {
    const newUser = new User({
      userName,
      email,
      password,
    });
    try {
      await newUser.save();
      /**creating a token and will send to frontend and this token will be again send to backend from frontend and then the token which is sent by frontned and this token will be compared */
      const token = Jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
      res.status(200).json({ message: "user registered succeessfully", token });
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }
};
