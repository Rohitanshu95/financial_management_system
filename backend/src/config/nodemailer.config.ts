import nodemailer from "nodemailer";
import { Env } from "./env.config";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Env.GMAIL_USER,
    pass: Env.GMAIL_PASS,
  },
});
