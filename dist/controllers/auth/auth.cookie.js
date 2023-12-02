"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const jsonwebtoken_1 = require("jsonwebtoken");
const setCookie = (req, res) => {
    const auth = req.headers.authorization;
    const token = auth === null || auth === void 0 ? void 0 : auth.split(" ")[1];
    res.cookie("LOGIN_USER", token, {
        maxAge: 8640000,
        httpOnly: true,
        secure: true,
    });
    const decodeToken = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_TOKEN);
    res
        .status(200)
        .json((0, utils_1.message)(200, `Set cookie completely for ${decodeToken.role}`));
};
exports.default = setCookie;
