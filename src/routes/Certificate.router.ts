import express from 'express';
import { certificateController } from '../controller/Certificate.controller';
import upload from '../config/multer';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.get('/' , certificateController.getAll);
router.get('/:id' , certificateController.getById);

router.post('/' , authMiddleware , upload.single('image') , certificateController.create);
router.patch('/:id' , authMiddleware , upload.single('image') , certificateController.update);
router.delete('/:id' , authMiddleware ,  certificateController.delete);


export default router