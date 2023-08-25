import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
  const result = await Product.create(payload);
  return result;
};

const getAllProduct = async (): Promise<IProduct[]> => {
  const result = await Product.find();

  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
};
