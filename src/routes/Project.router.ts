import express from 'express';
import { projectController } from '../controller/Project.controller';
import upload from '../config/multer';

const router = express.Router()

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getById);

router.post('/' , upload.single('image') , projectController.create);
router.patch('/:id' , upload.single('image'), projectController.update);
router.delete('/:id', projectController.delete);

export default router