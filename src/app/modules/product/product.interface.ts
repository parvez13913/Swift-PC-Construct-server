import { Model } from 'mongoose';

export type IProduct = {
  productName: string;
  category: string;
  image: string;
  price: string;
  status: 'In Stock' | 'Out of stock';
  rating?: string;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
