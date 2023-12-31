/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database is conneted successfull`);

    app.listen(config.port, () => {
      console.log(`Database is on port ${config.port}`);
    });
  } catch (error) {
    console.log('Fail to connect database', error);
  }
}

bootstrap();
