import request from 'supertest';
import { app } from '../src/server';
import Application from '../src/models/Application';

jest.mock('../src/models/Application');

describe('Admission Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/v1/admission/apply', () => {
    it('should return 400 for missing fields in admission form', async () => {
      const res = await request(app)
        .post('/api/v1/admission/apply')
        .send({ firstName: 'John' }); // missing other fields

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should create an application successfully', async () => {
      const mockApplication = { _id: 'app123', firstName: 'John', status: 'Pending' };
      (Application.create as jest.Mock).mockResolvedValue(mockApplication);

      const res = await request(app)
        .post('/api/v1/admission/apply')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '9876543210',
          courseId: 'courseId',
          departmentId: 'deptId',
          previousEducation: [
            { institution: 'ABC School', degree: 'High School', yearOfCompletion: 2025, percentage: 85 }
          ]
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe('Application submitted successfully');
    });
  });
});
