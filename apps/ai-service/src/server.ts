import express from 'express';
import cors from 'cors';
import aiRoutes from './routes';

const app = express();
const PORT = process.env.AI_SERVICE_PORT || 5002;

app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/v1/ai', aiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'ai-service', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[AI Service] Server is running on port ${PORT}`);
});
