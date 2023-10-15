import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { verifyEmail } from "../controllers/userControllers/verifyEmail.js";
import { checkUserNameAvailability } from "../controllers/userControllers/checkUserNameAvailability.js";
import { signupUser } from "../controllers/userControllers/signupUser.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { verifyForgotPassword } from "../controllers/userControllers/verifyForgotPassword.js";
import { resetPassword } from "../controllers/userControllers/resetPassword.js";
import { login } from "../controllers/userControllers/login.js";

export const mailer = async (receiverMail, verificationCode) => {
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

router.post("/verify", verifyEmail);
router.post("/changeUserName", checkUserNameAvailability);
router.post("/signup", signupUser);
router.post("/verifyForgotPassword", verifyForgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/login", login);

export default router;
