import express from 'express'
import { timelineController } from '../controller/TimeLine.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.get('/' , timelineController.getAllTimelines);
router.get('/:id' , timelineController.getById);

router.post('/' , authMiddleware , timelineController.create)
router.patch('/:id' , authMiddleware , timelineController.update)
router.delete('/:id' ,authMiddleware ,  timelineController.delete)

export default router;