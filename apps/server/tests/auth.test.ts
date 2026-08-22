import request from 'supertest';
import { app } from '../src/server';
import User from '../src/models/User';
import bcrypt from 'bcrypt';

jest.mock('../src/models/User');
jest.mock('bcrypt');

describe('Auth Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/v1/auth/login', () => {
    it('should return 400 for invalid validation schema', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'not-an-email', password: '123' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should return 401 for invalid credentials', async () => {
      (User.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'test@salok.edu', password: 'password123' });

      expect(res.status).toBe(401);
      expect(res.body.message).toBe('Invalid credentials');
    });

    it('should return 200 and require MFA if user has MFA enabled', async () => {
      (User.findOne as jest.Mock).mockResolvedValue({
        _id: 'mockId',
        email: 'test@salok.edu',
        password: 'hashedpassword',
        mfaEnabled: true,
      });
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'test@salok.edu', password: 'password123' });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('MFA required');
    });
  });
});
