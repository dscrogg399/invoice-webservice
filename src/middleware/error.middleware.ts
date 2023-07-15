import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/http.exception";

/**
 * Middleware to handle errors throughout the application. Add this towards
 * the end of the Middleware stack.
 *
 * If a HttpException is caught, it will use the status and message from the exception.
 * Otherwise, it will default to a 500 status code and a general error message.
 *
 * @param {HttpException} error - The error object, ideally an instance of HttpException.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next function in the Express middleware stack.
 */
export const ErrorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send(message);
  } catch (error) {
    next(error);
  }
};
