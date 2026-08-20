import helmet from 'helmet';
import cors from 'cors';
import { Application } from 'express';

export const configureSecurityMiddleware = (app: Application) => {
  // Use Helmet to set secure HTTP headers
  app.use(helmet());

  // Configure CORS
  const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  };
  
  app.use(cors(corsOptions));

  // Disable x-powered-by header
  app.disable('x-powered-by');
};
