import express from 'express';
import { certificateController } from '../controller/Certificate.controller';
import upload from '../config/multer';
import authMiddleware from '../middleware/auth.middleware';
import { noCache, setCacheHeaders } from '../middleware/cacheControl.midleware';

const router = express.Router();

router.get('/' , setCacheHeaders(3600) , certificateController.getAll);
router.get('/:id' , setCacheHeaders(3600) , certificateController.getById);

router.post('/' , authMiddleware , noCache , upload.single('image') , certificateController.create);
router.patch('/:id' , authMiddleware , noCache , upload.single('image') , certificateController.update);
router.delete('/:id' , authMiddleware , noCache ,  certificateController.delete);


export default router