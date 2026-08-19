import express from 'express';
import { projectController } from '../controller/Project.controller';
import upload from '../config/multer';
import authMiddleware from '../middleware/auth.middleware';
import { noCache, setCacheHeaders } from '../middleware/cacheControl.middleware';

const router = express.Router()

router.get('/', setCacheHeaders(1800)  , projectController.getAllProjects);
router.get('/:id', setCacheHeaders(3600) , projectController.getById);

router.post('/' ,authMiddleware , noCache , upload.single('image') , projectController.create);
router.patch('/:id' ,authMiddleware , noCache , upload.single('image'), projectController.update);
router.delete('/:id',authMiddleware ,  noCache ,projectController.delete);

export default router