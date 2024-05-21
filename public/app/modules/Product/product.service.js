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
const randomGenerator_1 = __importDefault(require("../../utils/randomGenerator"));
const skuGenerator_1 = __importDefault(require("../../utils/skuGenerator"));
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = Object.assign(Object.assign({}, payload), { id: (0, randomGenerator_1.default)(), code: (0, skuGenerator_1.default)(), price: parseFloat(payload.price.toFixed(2)), prevPrice: parseFloat(payload.price.toFixed(2)) });
    yield product_model_1.default.create(productData);
    return { message: 'product created' };
});
const getAllProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = Object.assign({}, (payload || {}));
    const products = yield product_model_1.default.find(query);
    return products;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findOne({ id: productId });
    return product;
});
const updateProduct = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateDoc = Object.assign({}, payload);
    const product = yield product_model_1.default.findOneAndUpdate({ id: productId }, updateDoc, {
        new: true,
    });
    return product;
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.findOneAndDelete({ id: productId });
    return { message: 'deleted' };
});
//
const makeFlash = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.findOneAndUpdate({ id: productId }, { isFlash: true });
    return { message: 'make flash' };
});
const removeFlash = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.findOneAndUpdate({ id: productId }, { isFlash: false });
    return { message: 'remove flash' };
});
const ProductServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    makeFlash,
    removeFlash,
};
exports.default = ProductServices;
