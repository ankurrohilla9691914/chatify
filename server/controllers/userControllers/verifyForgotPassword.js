import User from "../../models/userModel.js";
import { mailer } from "../../routes/authRoutes.js";

export const verifyForgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(422).json({ error: "Please add all the field" });
  }
  const isUserExist = await User.findOne({ email: email });
  if (isUserExist) {
    try {
      let verificationCode = Math.floor(10000 + Math.random() * 900000);
      await mailer(email, verificationCode);
      res.status(200).json({ message: "Email sent", email, verificationCode });
    } catch (error) {
      res.status(422).json({ error: "Invalid email" });
    }
  } else {
    res.status(422).json({ error: "Email does not registered" });
  }
};
