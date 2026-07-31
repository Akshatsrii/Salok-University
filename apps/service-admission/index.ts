import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import applyRoutes from './src/routes/apply';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/admissions', applyRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'service-admission' });
});

app.listen(PORT, () => {
  console.log(`Admission Service running on port ${PORT}`);
});
