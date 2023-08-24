import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { ProcessorRouter } from './app/modules/processor/processor.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/processors', ProcessorRouter);

// global Error Handler
app.use(globalErrorHandler);

export default app;
