import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', CategoryController.createCategory);

// router.get('/:id', CategoryController.getSingleCategory);
// router.get('/', CategoryController.getAllCategory);

export const CategoryRouter = router;
