import { config } from "dotenv";
import { createTransport } from "nodemailer";
import { Options } from "nodemailer/lib/smtp-transport";

config();

const transportOptions: Options = {
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
};

const transporter = createTransport(transportOptions);

export default transporter;
