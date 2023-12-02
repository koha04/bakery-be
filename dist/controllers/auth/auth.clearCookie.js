"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clearCookie = (req, res) => {
    res.clearCookie("LOGIN_USER");
    res.end();
};
exports.default = clearCookie;
