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
const loginForm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = yield req.body;
        const user = yield prisma_1.default.users.findFirst({
            where: {
                email,
            },
        });
        if (!user) {
            res.status(400).json((0, utils_1.message)(400, "User not found"));
            return;
        }
        const comparePassword = yield (0, bcryptjs_1.compare)(password, user === null || user === void 0 ? void 0 : user.pass);
        if (!comparePassword) {
            res.status(400).json((0, utils_1.message)(400, "Incorrect password"));
            return;
        }
        const token = (0, jsonwebtoken_1.sign)({ id: user === null || user === void 0 ? void 0 : user.id, role: user === null || user === void 0 ? void 0 : user.role }, process.env.SECRET_TOKEN);
        res
            .status(200)
            .json({
            status: 200,
            message: token,
            displayName: user.name,
            photoURL: user.image,
        });
    }
    catch (error) {
        console.log(`Error in Login: ${error}`);
    }
});
exports.default = loginForm;
