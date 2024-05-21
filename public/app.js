"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const GlobalErrorHanler_1 = __importDefault(require("./app/middleware/GlobalErrorHanler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const sendResponse_1 = __importDefault(require("./app/utils/sendResponse"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    return (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Welcome to event 360 backend',
    });
});
// not found route
app.use(notFound_1.default);
// global error handler
app.use(GlobalErrorHanler_1.default);
exports.default = app;
