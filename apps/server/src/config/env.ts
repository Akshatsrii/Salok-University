import dotenv from 'dotenv';
import path from 'path';

// Load .env from the root of the monorepo
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

export const env = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/salok_university',
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'super_secret_jwt_key',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'super_secret_refresh_key',
};
