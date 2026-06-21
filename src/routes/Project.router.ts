import express from 'express';
import { projectController } from '../controller/Project.controller';
import upload from '../config/multer';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router()

router.get('/',projectController.getAllProjects);
router.get('/:id', projectController.getById);

router.post('/' ,authMiddleware , upload.single('image') , projectController.create);
router.patch('/:id' ,authMiddleware , upload.single('image'), projectController.update);
router.delete('/:id',authMiddleware , projectController.delete);

export default router