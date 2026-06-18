import express from 'express';
import { certificateController } from '../controller/Certificate.controller';
import upload from '../config/multer';

const router = express.Router();

router.get('/' , certificateController.getAll);
router.get('/:id' , certificateController.getById);

router.post('/' , upload.single('image') , certificateController.create);
router.patch('/:id' , upload.single('image') , certificateController.update);
router.delete('/:id' ,  certificateController.delete);


export default router