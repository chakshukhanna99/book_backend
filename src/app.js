"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorhandler_1 = __importDefault(require("./middlewares/globalErrorhandler"));
const userRouter_1 = __importDefault(require("./user/userRouter"));
const bookRouter_1 = __importDefault(require("./book/bookRouter"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const app = (0, express_1.default)();
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use((0, cors_1.default)({
    origin: "*", // ✅ Allows requests from all frontend domains
}));
app.use(express_1.default.json());
app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to elib api's" });
});
app.use("/api/users", userRouter_1.default);
app.use("/api/books", bookRouter_1.default);
//Global Error Handling
app.use(globalErrorhandler_1.default);
exports.default = app;
