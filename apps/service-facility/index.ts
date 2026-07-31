import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { LibraryBook, HostelRoom } from 'database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/v1/library/books', async (req, res) => {
  // Mock book search
  res.json([
    { title: 'Introduction to Algorithms', author: 'Cormen', availableCopies: 5 },
    { title: 'Database System Concepts', author: 'Silberschatz', availableCopies: 2 }
  ]);
});

app.get('/api/v1/hostels/availability', async (req, res) => {
  // Mock availability check
  res.json({ availableRooms: 12, totalCapacity: 500 });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'service-facility' });
});

app.listen(PORT, () => {
  console.log(`Facility Service running on port ${PORT}`);
});
