import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ICategory } from './category.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const result = await CategoryService.createCategory(categoryData);

  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Created Successfully !!',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
};
