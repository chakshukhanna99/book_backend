"use strict";
// import path from "node:path";
// import express from "express";
// import multer from "multer";
// import {createBook,updateBook,listBooks,getSingleBook,deleteBook} from "./bookController";
// import authenticate from "../middlewares/authenticate";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const bookRouter = express.Router();
// // file store local ->
// const upload = multer({
//     dest: path.resolve(__dirname, "../../public/data/uploads"),
//     // todo: put limit 10mb max.
//     limits: { fileSize: 3e7 }, // 30mb 30 * 1024 * 1024
// });
// // routes
// // /api/books
// bookRouter.post(
//     "/",
//     authenticate,
//     upload.fields([
//       { name: "coverImage", maxCount: 1 },
//       { name: "file", maxCount: 1 },
//     ]),
//     createBook
// );
// bookRouter.patch(
//     "/:bookId",
//     authenticate,
//     upload.fields([
//       { name: "coverImage", maxCount: 1 },
//       { name: "file", maxCount: 1 },
//     ]),
//     updateBook
// );
// bookRouter.get("/", listBooks);
// bookRouter.get("/:bookId", getSingleBook);
// bookRouter.delete("/:bookId", authenticate, deleteBook);
// export default bookRouter;
// import path from "node:path";
// import express from "express";
// import multer from "multer";
// import {
//   createBook,
//   updateBook,
//   listBooks,
//   getSingleBook,
//   deleteBook,
// } from "./bookController";
// import authenticate from "../middlewares/authenticate";
// const bookRouter = express.Router();
// // file store local ->
// const upload = multer({
//   dest: path.resolve(__dirname, "../../public/data/uploads"),
//   // Limit: 30MB
//   limits: { fileSize: 3e7 },
// });
// /**
//  * @swagger
//  * tags:
//  *   name: Books
//  *   description: Book management APIs
//  */
// /**
//  * @swagger
//  * /api/books:
//  *   post:
//  *     summary: Upload a new book
//  *     tags: [Books]
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               coverImage:
//  *                 type: string
//  *                 format: binary
//  *               file:
//  *                 type: string
//  *                 format: binary
//  *               title:
//  *                 type: string
//  *               author:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Book created successfully
//  *       401:
//  *         description: Unauthorized
//  */
// bookRouter.post(
//   "/",
//   authenticate,
//   upload.fields([
//     { name: "coverImage", maxCount: 1 },
//     { name: "file", maxCount: 1 },
//   ]),
//   createBook
// );
// /**
//  * @swagger
//  * /api/books/{bookId}:
//  *   patch:
//  *     summary: Update an existing book
//  *     tags: [Books]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: bookId
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The ID of the book to update
//  *     requestBody:
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               coverImage:
//  *                 type: string
//  *                 format: binary
//  *               file:
//  *                 type: string
//  *                 format: binary
//  *               title:
//  *                 type: string
//  *               author:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Book updated
//  *       404:
//  *         description: Book not found
//  */
// bookRouter.patch(
//   "/:bookId",
//   authenticate,
//   upload.fields([
//     { name: "coverImage", maxCount: 1 },
//     { name: "file", maxCount: 1 },
//   ]),
//   updateBook
// );
// /**
//  * @swagger
//  * /api/books:
//  *   get:
//  *     summary: List all books
//  *     tags: [Books]
//  *     responses:
//  *       200:
//  *         description: List of books
//  */
// bookRouter.get("/", listBooks);
// /**
//  * @swagger
//  * /api/books/{bookId}:
//  *   get:
//  *     summary: Get a single book by ID
//  *     tags: [Books]
//  *     parameters:
//  *       - in: path
//  *         name: bookId
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The ID of the book to retrieve
//  *     responses:
//  *       200:
//  *         description: Book found
//  *       404:
//  *         description: Book not found
//  */
// bookRouter.get("/:bookId", getSingleBook);
// /**
//  * @swagger
//  * /api/books/{bookId}:
//  *   delete:
//  *     summary: Delete a book by ID
//  *     tags: [Books]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: bookId
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The ID of the book to delete
//  *     responses:
//  *       200:
//  *         description: Book deleted
//  *       401:
//  *         description: Unauthorized
//  *       404:
//  *         description: Book not found
//  */
// bookRouter.delete("/:bookId", authenticate, deleteBook);
// export default bookRouter;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const bookController_1 = require("./bookController");
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const bookRouter = express_1.default.Router();
// File upload config: stores in local `public/data/uploads`
const upload = (0, multer_1.default)({
    dest: node_path_1.default.resolve(__dirname, "../../public/data/uploads"),
    limits: { fileSize: 3e7 }, // 30MB
});
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management APIs
 */
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Upload a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               coverImage:
 *                 type: string
 *                 format: binary
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:   # ✅ Add this
 *                 type: string
 *     responses:
 *       201:
 *         description: Book created successfully
 *       401:
 *         description: Unauthorized
 */
bookRouter.post("/", authenticate_1.default, upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
]), bookController_1.createBook);
/**
 * @swagger
 * /api/books/{bookId}:
 *   patch:
 *     summary: Update an existing book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to update
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               coverImage:
 *                 type: string
 *                 format: binary
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Book not found
 */
bookRouter.patch("/:bookId", authenticate_1.default, upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
]), bookController_1.updateBook);
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: List all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of books
 */
bookRouter.get("/", bookController_1.listBooks);
/**
 * @swagger
 * /api/books/{bookId}:
 *   get:
 *     summary: Get a single book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to retrieve
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
bookRouter.get("/:bookId", bookController_1.getSingleBook);
/**
 * @swagger
 * /api/books/{bookId}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to delete
 *     responses:
 *       200:
 *         description: Book deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Book not found
 */
bookRouter.delete("/:bookId", authenticate_1.default, bookController_1.deleteBook);
exports.default = bookRouter;
