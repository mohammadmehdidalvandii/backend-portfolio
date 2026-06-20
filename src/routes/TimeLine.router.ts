import express from 'express'
import { timelineController } from '../controller/TimeLine.controller';

const router = express.Router();

router.get('/' , timelineController.getAllTimelines);
router.get('/:id' , timelineController.getById);

router.post('/' , timelineController.create)
router.patch('/:id' , timelineController.update)
router.delete('/:id' , timelineController.delete)

export default router;