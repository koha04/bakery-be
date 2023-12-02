"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mailer_1 = __importDefault(require("../../lib/mailer"));
const index_1 = require("../../utils/index");
(0, dotenv_1.config)();
const sendMail = (req, res) => {
    const { username, email, password } = res.locals;
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: email,
        subject: "Email Authentication",
        html: `<h1>Welcome ${email}</h1>
      <p>Please confirm the information to continue</p>  
      <p>Click the button below</p>
      <a href="http://localhost:5432/auth/confirm/?name=${username}&email=${email}&pass=${password}>Confirm</a>  
    `,
    };
    mailer_1.default.sendMail(mailOptions, (err, info) => {
        if (err) {
            res
                .status(400)
                .json((0, index_1.message)(400, `Send mail occurs error: ${err.message}`));
            return;
        }
        res.status(200).json((0, index_1.message)(200, `Email sent: ${info.response}`));
    });
};
exports.default = sendMail;
