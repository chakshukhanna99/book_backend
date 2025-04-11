"use strict";
// import express from "express";
// import { createUser,loginUser } from "./userController";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const userRouter = express.Router();
// // routes
// userRouter.post("/register", createUser);
// userRouter.post("/login", loginUser);
// // userRouter.post("/login", loginUser);
// export default userRouter;
const express_1 = __importDefault(require("express"));
const userController_1 = require("./userController");
const userRouter = express_1.default.Router();
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
userRouter.post("/register", userController_1.createUser);
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
userRouter.post("/login", userController_1.loginUser);
exports.default = userRouter;
