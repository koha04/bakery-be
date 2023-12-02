"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const nodemailer_1 = require("nodemailer");
(0, dotenv_1.config)();
const transportOptions = {
    service: "gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
    },
};
const transporter = (0, nodemailer_1.createTransport)(transportOptions);
exports.default = transporter;
