import { config } from "dotenv";
import { Request, Response } from "express";
import { SentMessageInfo } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import transporter from "../../lib/mailer";
import { message } from "../../utils/index";

config();

const sendMail = (req: Request, res: Response) => {
  const { username, email, password } = res.locals;

  const mailOptions: MailOptions = {
    from: process.env.USER_EMAIL,
    to: email,
    subject: "Email Authentication",
    html: `<h1>Welcome ${email}</h1>
      <p>Please confirm the information to continue</p>  
      <p>Click the button below</p>
      <a href="http://localhost:5432/auth/confirm/?name=${username}&email=${email}&pass=${password}>Confirm</a>  
    `,
  };

  transporter.sendMail(
    mailOptions,
    (err: Error | null, info: SentMessageInfo) => {
      if (err) {
        res
          .status(400)
          .json(message(400, `Send mail occurs error: ${err.message}`));
        return;
      }

      res.status(200).json(message(200, `Email sent: ${info.response}`));
    }
  );
};

export default sendMail;
