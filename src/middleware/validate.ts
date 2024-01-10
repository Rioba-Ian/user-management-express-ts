import {Request, Response, NextFunction} from "express";
import {AnyZodObject, ZodError} from "zod";

export const validate =
 (schema: AnyZodObject) =>
 (req: Request, res: Response, next: NextFunction) => {
  try {
   schema.parse({
    params: req.params,
    query: req.query,
    body: req.body,
   });

   next();
  } catch (e) {
   if (e instanceof ZodError) {
    return res.status(400).json({
     status: "fail",
     errors: e.errors,
    });
   }
  }
 };
