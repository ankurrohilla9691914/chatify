import User from "../../models/userModel.js";

export const checkUserNameAvailability = async (req, res) => {
  const { userName, email } = req.body;

  /** check if username exist  */
  const isUserNameExist = await User.findOne({ userName });

  if (isUserNameExist) {
    res.status(422).json({ message: "userName not available" });
  } else {
    res.status(200).json({ message: "userName available" });
  }
};
