"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    const statusCode = err.StatusCode || 500;
    const message = err.message || 'something went wrong';
    return res.status(statusCode).json({
        status: statusCode,
        success: false,
        message: message,
        err,
    });
};
exports.default = globalErrorHandler;
