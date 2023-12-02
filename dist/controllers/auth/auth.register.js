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
const prisma_1 = __importDefault(require("../../lib/prisma"));
const index_1 = require("../../utils/index");
const signupForm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { username, email, password } = yield req.body;
        const salt = yield (0, bcryptjs_1.genSalt)();
        const hashPassword = yield (0, bcryptjs_1.hash)(password, salt);
        const user = yield prisma_1.default.users.findFirst({
            where: {
                OR: [{ name: username }, { email }],
            },
        });
        if ((_a = user === null || user === void 0 ? void 0 : user.email) !== null && _a !== void 0 ? _a : user === null || user === void 0 ? void 0 : user.name) {
            const name = user.name === username ? user.name : null;
            const mail = user.email === email ? user.email : null;
            res.status(400).json((0, index_1.message)(400, `${mail !== null && mail !== void 0 ? mail : name} has been registered`));
            return;
        }
        res.locals = Object.assign(Object.assign({}, req.body), { password: hashPassword });
        next();
    }
    catch (error) {
        console.log(`Error in Sign up: ${error}`);
    }
});
exports.default = signupForm;
