"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAdmin_1 = __importDefault(require("../../controllers/admin/isAdmin"));
const addAdmin_admin_1 = __importDefault(require("../../controllers/admin/addAdmin.admin"));
const addProduct_admin_1 = __importDefault(require("../../controllers/admin/addProduct.admin"));
const route = (0, express_1.Router)();
route.get("/", isAdmin_1.default);
route.post("/addProduct", addProduct_admin_1.default);
route.post("/addAdmin", addAdmin_admin_1.default);
exports.default = route;
