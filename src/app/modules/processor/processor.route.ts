import express from 'express';
import { ProcessorController } from './processor.controller';

const router = express.Router();

router.post('/create-processor', ProcessorController.createProcessor);

router.get('/', ProcessorController.getAllProcessor);

export const ProcessorRouter = router;
