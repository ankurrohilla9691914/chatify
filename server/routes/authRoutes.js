import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import User from "../models/userModel.js";

const mailer = async (receiverMail, verificationCode) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTls: true,
    auth: {
      user: "chatifyorganization@gmail.com",
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const emailInfo = await transporter.sendMail({
    from: "chatify", // sender address
    to: `${receiverMail}`, // list of receivers
    subject: "Chatify's verification code", // Subject line
    text: `verification for your chatify account is ${verificationCode}`, // plain text body
  });
};

dotenv.config();

const router = express.Router();
router.get("/verify", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(422).json({ error: "PLease add all the fields" });
  } else {
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      res.status(422).json({ error: "User exist with this mail" });
    }
    try {
      let verificationCode = Math.floor(10000 + Math.random() * 900000);
      await mailer(email, verificationCode);
      res.status(200).json({ message: "yes mail sent" });
    } catch (error) {
      res
        .status(422)
        .json({ error: `error in sending email ${error.message}` });
    }
  }
});

export default router;
