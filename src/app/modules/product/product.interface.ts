import { Model } from 'mongoose';

export type IProduct = {
  image: string;
  name: string;
  category: string;
  status: 'In Stock' | 'Out of stock';
  price: number;
  description: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  reviews: string[];
  quantity: number;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
