"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
const utils_1 = require("../../utils");
(0, dotenv_1.config)();
const isAdmin = (req, res) => {
    const token = req.cookies["LOGIN_USER"];
    if (!token) {
        res.status(400).json((0, utils_1.message)(400, "Missing token for authentication"));
        return;
    }
    const decodeToken = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_TOKEN);
    if (decodeToken.role === "ADMIN") {
        res.status(200).json({ redirect: "/dashboard", role: "admin" });
    }
    else {
        res.status(400).json({ redirect: "/", role: "user" });
    }
};
exports.default = isAdmin;
