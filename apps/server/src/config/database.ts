import mongoose from 'mongoose';
import { env } from './env';

export const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(env.MONGODB_URI);
      console.log('MongoDB connected successfully');
      break;
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      if (retries === 0) {
        console.error('Exhausted all retries. Exiting...');
        process.exit(1);
      }
      // wait 5 seconds before retrying
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};
