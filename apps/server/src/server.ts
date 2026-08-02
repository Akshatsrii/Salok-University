import express, { Application, Request, Response } from 'express';
import { env } from './config/env';
import { connectDB } from './config/database';

// Import all models to ensure schemas are registered
import './models';

const app: Application = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
