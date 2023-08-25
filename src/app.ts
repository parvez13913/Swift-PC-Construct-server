import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { ProductRouter } from './app/modules/product/product.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products', ProductRouter);

// global Error Handler
app.use(globalErrorHandler);

export default app;
