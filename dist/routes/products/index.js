"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllProducts_1 = __importDefault(require("../../controllers/products/getAllProducts"));
const buyProducts_1 = __importDefault(require("../../controllers/products/buyProducts"));
const detailProduct_1 = __importDefault(require("../../controllers/products/detailProduct"));
const route = (0, express_1.Router)();
route.get("/allproducts", getAllProducts_1.default);
route.get("/detail/:id", detailProduct_1.default);
route.post("/buyproducts", buyProducts_1.default);
exports.default = route;
