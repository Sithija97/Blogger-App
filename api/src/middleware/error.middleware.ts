import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status ? err.status : 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || [];

  // console.log(
  //   `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`
  // );
  res.status(status).json({
    message,
    errors,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
