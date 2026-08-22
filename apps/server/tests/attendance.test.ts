import request from 'supertest';
import { app } from '../src/server';
import Attendance from '../src/models/Attendance';

jest.mock('../src/models/Attendance');

describe('Attendance Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/v1/attendance/mark', () => {
    it('should return 400 for invalid status', async () => {
      const res = await request(app)
        .post('/api/v1/attendance/mark')
        .send({
          studentId: 'stud123',
          courseId: 'course123',
          subjectId: 'sub123',
          date: new Date().toISOString(),
          status: 'invalid_status'
        });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should successfully mark attendance', async () => {
      (Attendance.create as jest.Mock).mockResolvedValue({ _id: 'att123', status: 'present' });

      const res = await request(app)
        .post('/api/v1/attendance/mark')
        .send({
          studentId: 'stud123',
          courseId: 'course123',
          subjectId: 'sub123',
          date: new Date().toISOString(),
          status: 'present'
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe('Attendance marked successfully');
    });
  });
});
