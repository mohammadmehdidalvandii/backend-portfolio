import express from 'express';
import { messageController } from '../controller/Message.controller';
import authMiddleware from '../middleware/auth.middleware';
import { noCache, setCacheHeaders } from '../middleware/cacheControl.middleware';

const router  = express.Router();

router.get('/' , setCacheHeaders(300)  , authMiddleware , messageController.getAll)
router.get('/:id' , setCacheHeaders(3600)  , messageController.getById)

router.post('/' , noCache , messageController.create)
router.patch('/:id' , noCache , authMiddleware , messageController.update)
router.delete('/:id' , noCache , authMiddleware , messageController.delete)

export default router