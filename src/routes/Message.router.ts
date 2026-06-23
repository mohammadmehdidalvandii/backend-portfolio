import express from 'express';
import { messageController } from '../controller/Message.controller';
import authMiddleware from '../middleware/auth.middleware';

const router  = express.Router();

router.get('/' , messageController.getAll)
router.get('/:id' , messageController.getById)

router.post('/' , messageController.create)
router.patch('/:id' , authMiddleware , messageController.update)
router.delete('/:id' , authMiddleware , messageController.delete)

export default router