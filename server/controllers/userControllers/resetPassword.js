import User from "../../models/userModel.js";

export const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please provide email and password" });
  } else {
    try {
      const user = await User.findOne({ email: email });
      user.password = password;
      await user.save();
      res.status(200).json({ message: "password updated successfully" });
    } catch (error) {
      return res.status(422).json({ error: "invalid credentials" });
    }
  }
};
