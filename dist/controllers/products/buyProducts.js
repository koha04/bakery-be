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
const prisma_1 = __importDefault(require("../../lib/prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const utils_1 = require("../../utils");
const buyProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies["LOGIN_USER"];
    const products = req.body;
    const decodeToken = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_TOKEN);
    yield prisma_1.default.orders.create({
        data: {
            userId: decodeToken.id,
        },
    });
    const dbProducts = yield prisma_1.default.bakeryProducts.findMany();
    yield products.map(({ id, amount }) => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield prisma_1.default.orders.findFirst({
            where: {
                userId: decodeToken.id,
            },
        });
        yield prisma_1.default.orderItems.create({
            data: {
                productId: id,
                quantity: amount,
                orderId: (order === null || order === void 0 ? void 0 : order.id) ? order.id : 1,
            },
        });
        const selectedProduct = dbProducts.find((item) => item.id === id);
        if (selectedProduct) {
            yield prisma_1.default.bakeryProducts.update({
                data: {
                    quantity: selectedProduct.quantity - amount,
                },
                where: {
                    id,
                },
            });
        }
    }));
    res.status(200).json((0, utils_1.message)(200, "OK"));
});
exports.default = buyProducts;
