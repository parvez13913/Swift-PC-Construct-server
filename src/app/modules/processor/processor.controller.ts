import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProcessor } from './processor.interface';
import httpStatus from 'http-status';
import { ProcessorService } from './processor.service';

const createProcessor = catchAsync(async (req: Request, res: Response) => {
  const { ...processorData } = req.body;
  const result = await ProcessorService.createProcessor(processorData);

  sendResponse<IProcessor>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Processor Created Successfully !!',
    data: result,
  });
});

const getAllProcessor = catchAsync(async (req: Request, res: Response) => {
  const result = await ProcessorService.getAllProcessor();

  sendResponse<IProcessor[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Processor retrieved Successfully !!',
    data: result,
  });
});

export const ProcessorController = {
  createProcessor,
  getAllProcessor,
};
