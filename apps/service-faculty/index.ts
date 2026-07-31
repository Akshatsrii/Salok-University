import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { FacultyProfile } from 'database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/v1/faculty/dashboard', async (req, res) => {
  // Mock dashboard response
  res.json({
    todaysClasses: [
      { subject: 'Data Structures', time: '09:00 AM', room: '304' },
      { subject: 'Algorithms', time: '02:00 PM', room: 'Lab 2' }
    ],
    pendingEvaluations: 45,
    upcomingMeetings: 2
  });
});

app.post('/api/v1/faculty/attendance', async (req, res) => {
  // Mock attendance marking
  res.json({ success: true, message: 'Attendance marked successfully' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'service-faculty' });
});

app.listen(PORT, () => {
  console.log(`Faculty Service running on port ${PORT}`);
});
