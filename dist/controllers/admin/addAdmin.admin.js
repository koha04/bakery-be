"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const utils_1 = require("../../utils");
(0, dotenv_1.config)();
const addAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies["LOGIN_USER"];
    const { name_admin, email_admin, pass_admin } = yield req.body;
    if (!token) {
        res.status(400).json((0, utils_1.message)(400, "Missing token for authentication"));
        return;
    }
    const decodeToken = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_TOKEN);
    if (decodeToken.role === "ADMIN") {
        const salt = yield (0, bcryptjs_1.genSalt)();
        const hashPass = yield (0, bcryptjs_1.hash)(pass_admin, salt);
        yield prisma_1.default.users.create({
            data: {
                name: name_admin,
                email: email_admin,
                pass: hashPass,
                role: "ADMIN",
            },
        });
        return res.status(200).json((0, utils_1.message)(200, "Add admin successfully"));
    }
    return res
        .status(400)
        .json((0, utils_1.message)(400, "You cannot add admin as user role"));
});
exports.default = addAdmin;
