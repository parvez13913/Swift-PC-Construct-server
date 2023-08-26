import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { ProductRouter } from './app/modules/product/product.route';
import { CategoryRouter } from './app/modules/category/category.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/categories', CategoryRouter);

// global Error Handler
app.use(globalErrorHandler);

export default app;
