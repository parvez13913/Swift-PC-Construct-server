import { Schema, model } from 'mongoose';
import { IProcessor, ProcessorModel } from './processor.interface';
import { status } from '../../../constants/status';

const processorSchema = new Schema<IProcessor, ProcessorModel>(
  {
    processor: {
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

export const Processor = model<IProcessor, ProcessorModel>(
  'Processor',
  processorSchema,
);
