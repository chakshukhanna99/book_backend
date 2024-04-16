import express from "express";
import  { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import { config } from "./config/config";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json());

app.get("/",(req,res,next)=>{
    res.json({message:"Welcome to elib api's"});
})
app.use("/api/users", userRouter);

//Global Error Handling
app.use(globalErrorHandler);

export default app;