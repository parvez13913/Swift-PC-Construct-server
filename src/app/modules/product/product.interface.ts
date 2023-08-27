import { Model } from 'mongoose';

export type KeyFeatures = [
  {
    model: string;
    brand: string;
    type: string;
  },
];

export type IProduct = {
  productName: string;
  image: string;
  name: string;
  category: string;
  status: 'In Stock' | 'Out of stock';
  price: number;
  description: string;
  keyFeatures: KeyFeatures[];
  individualRating: number;
  averageRating: number;
  reviews: string[];
  quantity: number;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
