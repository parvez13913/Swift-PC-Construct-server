import { Model } from 'mongoose';

export type IProcessor = {
  processor: string;
  category: string;
  image: string;
  price: string;
  status: 'In Stock' | 'Out of stock';
  rating?: string;
};

export type ProcessorModel = Model<IProcessor, Record<string, unknown>>;
