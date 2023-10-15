import User from "../../models/userModel.js";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please provide email and password" });
  } else {
    try {
      const savedUser = await User.findOne({ email: email });
      /** why not hashing of new password , we have a middleware which will run pre-save and in that email we are handling of hashing*/
      if (savedUser) {
        try {
          const isPasswordMatched = await bcrypt.compare(
            password,
            savedUser.password
          );
          if (isPasswordMatched) {

            const token = Jwt.sign(
              { _id: savedUser._id },
              process.env.JWT_SECRET
            );
            const { _id, userName, email } = savedUser;
            return res.status(200).json({
              message: "Successfullt signedIn",
              token,
              user: { _id, userName, email },
            });
          } else {
            return res.status(422).json({ error: "invalid credentials" });
          }
        } catch (error) {
          return res.status(422).json({ error: error });
        }
      } else {

        res.status(422).json({ error: "invalid credentials" });
      }
    } catch (e) {
      res.status(422).json({ error: "invalid credentials" });
    }
  }
};
