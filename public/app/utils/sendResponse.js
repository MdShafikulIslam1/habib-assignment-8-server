"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, responseData) => {
    return res.status(responseData.statusCode).json({
        status: responseData.statusCode,
        success: responseData.success,
        message: responseData.message,
        data: responseData.data,
    });
};
exports.default = sendResponse;
