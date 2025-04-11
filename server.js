"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const config_1 = require("./src/config/config");
const db_1 = __importDefault(require("./src/config/db"));
const mongoose = require('mongoose');
const startServer = async () => {
    // Connect database
    await (0, db_1.default)();
    const port = config_1.config.port || 3000;
    app_1.default.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
};
startServer();
