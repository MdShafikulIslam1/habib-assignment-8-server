"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const router = (0, express_1.Router)();
router.post('/create-product', product_controller_1.default.createProduct);
router.get('/', product_controller_1.default.getAllProduct);
router.get('/:productId', product_controller_1.default.getSingleProduct);
router.patch('/:productId', product_controller_1.default.updateProduct);
router.delete('/:productId', product_controller_1.default.deleteProduct);
router.patch('/:productId/make-flash', product_controller_1.default.makeFlash);
router.patch('/:productId/remove-flash', product_controller_1.default.removeFlash);
const ProductRoutes = router;
exports.default = ProductRoutes;
