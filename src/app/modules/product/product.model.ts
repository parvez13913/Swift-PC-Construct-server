import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';
import { status } from '../../../constants/status';

const productSchema = new Schema<IProduct, ProductModel>(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: status,
      required: true,
    },
    rating: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Product = model<IProduct, ProductModel>('Product', productSchema);
