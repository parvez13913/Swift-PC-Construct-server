import { IProcessor } from './processor.interface';
import { Processor } from './processor.model';

const createProcessor = async (
  payload: IProcessor,
): Promise<IProcessor | null> => {
  const result = await Processor.create(payload);
  return result;
};

const getAllProcessor = async (): Promise<IProcessor[]> => {
  const result = await Processor.find();

  return result;
};

export const ProcessorService = {
  createProcessor,
  getAllProcessor,
};
