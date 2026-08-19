import express from 'express'
import { timelineController } from '../controller/TimeLine.controller';
import authMiddleware from '../middleware/auth.middleware';
import { noCache, setCacheHeaders } from '../middleware/cacheControl.middleware';

const router = express.Router();

router.get('/' ,setCacheHeaders(1800) , timelineController.getAllTimelines);
router.get('/:id' ,setCacheHeaders(3600) , timelineController.getById);

router.post('/' , noCache ,  authMiddleware , timelineController.create)
router.patch('/:id' , noCache ,  authMiddleware , timelineController.update)
router.delete('/:id' , noCache , authMiddleware ,  timelineController.delete)

export default router;