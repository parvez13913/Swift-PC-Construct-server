import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);

export const CategoryRouter = router;
