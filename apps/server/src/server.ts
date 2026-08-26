import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { env } from './config/env';
import { connectDB } from './config/database';

// Import all models to ensure schemas are registered
import './models';

// Import routes
import authRoutes from './routes/auth.routes';
import dashboardRoutes from './routes/dashboard.routes';
import admissionRoutes from './routes/admission.routes';
import studentRoutes from './routes/student.routes';
import attendanceRoutes from './routes/attendance.routes';
import timetableRoutes from './routes/timetable.routes';
import assignmentRoutes from './routes/assignment.routes';
import examRoutes from './routes/exam.routes';
import resultRoutes from './routes/result.routes';
import communicationRoutes from './routes/communication.routes';
import universityRoutes from './routes/university.routes';
import academicStructureRoutes from './routes/academicStructure.routes';
import financeRoutes from './routes/finance.routes';
import libraryRoutes from './routes/library.routes';
import hostelRoutes from './routes/hostel.routes';
import transportRoutes from './routes/transport.routes';
import placementRoutes from './routes/placement.routes';
import contactRoutes from './routes/contact.routes';

import { configureSecurityMiddleware } from './middlewares/security.middleware';
import { apiLimiter } from './middlewares/rateLimiter.middleware';
import { requestLogger } from './middlewares/logger.middleware';
import { scheduleBackups } from './jobs/backup.job';

const app: Application = express();

app.use(requestLogger);
configureSecurityMiddleware(app);
app.use(express.json());
app.use(cookieParser());
app.use('/api', apiLimiter);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/admission', admissionRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/attendance', attendanceRoutes);
app.use('/api/v1/timetable', timetableRoutes);
app.use('/api/v1/assignments', assignmentRoutes);
app.use('/api/v1/exams', examRoutes);
app.use('/api/v1/results', resultRoutes);
app.use('/api/v1/communication', communicationRoutes);
app.use('/api/v1/university', universityRoutes);
app.use('/api/v1/academic', academicStructureRoutes);
app.use('/api/v1/finance', financeRoutes);
app.use('/api/v1/library', libraryRoutes);
app.use('/api/v1/hostel', hostelRoutes);
app.use('/api/v1/transport', transportRoutes);
app.use('/api/v1/placement', placementRoutes);
app.use('/api/v1/contact', contactRoutes);

export { app };

const startServer = async () => {
  try {
    await connectDB();
    
    // Only schedule jobs in production or if explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.ENABLE_JOBS === 'true') {
      scheduleBackups().catch(err => console.error('Failed to schedule backups', err));
    }

    app.listen(env.PORT, () => {
      console.log(`Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}
