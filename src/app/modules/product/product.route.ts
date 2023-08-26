import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/:id', ProductController.getSingleProduct);
router.get('/', ProductController.getAllProduct);

export const ProductRouter = router;
