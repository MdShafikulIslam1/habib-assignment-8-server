"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'is is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    code: {
        type: String,
        required: [true, 'code is required'],
        unique: true,
    },
    images: {
        type: [String],
        required: [true, 'images is required'],
    },
    prevPrice: {
        type: Number,
        required: [true, 'prevPrice is required'],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    category: {
        type: String,
        required: [true, 'category is required'],
    },
    isFlash: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required'],
    },
    sale: {
        type: Number,
        default: 0,
    },
});
const Product = (0, mongoose_1.model)('product', ProductSchema);
exports.default = Product;
