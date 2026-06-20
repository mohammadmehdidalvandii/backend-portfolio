import express from 'express';
import { messageController } from '../controller/Message.controller';

const router  = express.Router();

router.get('/' , messageController.getAll)
router.get('/:id' , messageController.getById)

router.post('/' , messageController.create)
router.patch('/:id' , messageController.update)
router.delete('/:id' , messageController.delete)

export default router