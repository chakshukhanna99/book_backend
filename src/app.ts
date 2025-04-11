import express from "express";
import cors from "cors";
import { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import { config } from "./config/config";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(
  cors({
    origin: "*", // ✅ Allows requests from all frontend domains
  })
);
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to elib api's" });
});
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

//Global Error Handling
app.use(globalErrorHandler);

export default app;
