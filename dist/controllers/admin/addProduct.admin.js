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
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const utils_1 = require("../../utils");
(0, dotenv_1.config)();
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies["LOGIN_USER"];
    const { name_product, imageurl, desc_product, price_product, quantity_product, type_product, } = yield req.body;
    let categoryId = 1;
    if (!token) {
        res.status(400).json((0, utils_1.message)(400, "Missing token for authentication"));
        return;
    }
    const decodeToken = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_TOKEN);
    switch (type_product) {
        case "CHEESE_CAKE":
            categoryId = 2;
            break;
        case "DRINK":
            categoryId = 3;
            break;
        default:
            return categoryId;
    }
    if (decodeToken.role === "ADMIN") {
        yield prisma_1.default.bakeryProducts.create({
            data: {
                name: name_product,
                imageUrl: imageurl,
                price: price_product,
                description: desc_product,
                quantity: quantity_product,
                type: type_product,
                categoryId: 1,
            },
        });
        return res.status(200).json((0, utils_1.message)(200, "Add product successfully"));
    }
    return res
        .status(400)
        .json((0, utils_1.message)(400, "You cannot add product as user role"));
});
exports.default = addProduct;
