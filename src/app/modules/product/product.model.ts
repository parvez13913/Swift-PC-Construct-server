import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const keyFeaturesSchema = new Schema({
  model: String,
  brand: String,
  type: String,
});

const productSchema = new Schema<IProduct, ProductModel>(
  {
    productName: String,
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
    keyFeatures: [keyFeaturesSchema],
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
