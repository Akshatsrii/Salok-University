import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import universityRoutes from './routes/university';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/universities', universityRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'service-core' });
});

app.listen(PORT, () => {
  console.log(`Core Service running on port ${PORT}`);
});