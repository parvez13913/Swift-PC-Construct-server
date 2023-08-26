import { Schema, model } from 'mongoose';
import { CategoryModel, ICategory } from './category.interface';

const categorySchema = new Schema<ICategory, CategoryModel>(
  {
    name: {
      type: String,
      required: true,
    },
    categoryIcon: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Category = model<ICategory, ICategory>('Category', categorySchema);
