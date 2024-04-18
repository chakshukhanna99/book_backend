import { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "node:fs";
import bookRouter from "./bookRouter";
import bookModel from "./bookModel";
import cloudinary from "../config/cloudinary";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, genre } = req.body;
  console.log("files", req.files);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  // Access the coverImage property only if it exists
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    filename_override: fileName,
    folder: "book-covers",
    format: coverImageMimeType,
  });

  res.json({});
  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath, {
    resource_type: "raw",
    filename_override: bookFileName,
    folder: "book-pdfs",
    format: "pdf",
  });
  console.log("uploadResult", uploadResult);
  console.log("uploadResult",bookFileUploadResult);
    const newBook = await bookModel.create({
      title,
      genre,
      author: "661f06ccf7ebf8d10d5ac6d5",
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

        // Delete temp.files
    // todo: wrap in try catch...
    await fs.promises.unlink(filePath);
    await fs.promises.unlink(bookFilePath);
    res.status(201).json({ id: newBook._id });

};

export { createBook };
