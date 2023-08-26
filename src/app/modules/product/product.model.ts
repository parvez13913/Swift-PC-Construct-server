import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const productSchema = new Schema<IProduct, ProductModel>(
  {
    image: String,
    name: String,
    category: String,
    status: {
      type: String,
      enum: ['In Stock', 'Out of stock'],
      default: 'In Stock',
    },
    price: Number,
    description: String,
    keyFeatures: [String],
    individualRating: Number,
    averageRating: Number,
    reviews: [String],
    quantity: Number,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Product = model<IProduct, ProductModel>('Product', productSchema);
