import { Request, Response, NextFunction } from "express";
import { Multer } from 'multer';

export type ExpressHandler = (req: Request, res: Response, next: NextFunction) => void;

declare global {
    namespace Express {
        interface Request {
            file?: Multer.File;
            files?: Multer.File[];
        }
    }
}