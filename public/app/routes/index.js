"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = __importDefault(require("../modules/Product/product.route"));
const router = (0, express_1.Router)();
const routes = [
    {
        path: '/products',
        route: product_route_1.default,
    },
];
routes.map(route => router.use(route.path, route.route));
exports.default = router;
