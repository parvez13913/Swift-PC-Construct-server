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

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findOne({ _id: id });

  return result;
};

const getRandomProducts = async (count: number): Promise<IProduct[] | null> => {
  const result = await Product.aggregate([{ $sample: { size: count } }]);

  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  getRandomProducts,
};
