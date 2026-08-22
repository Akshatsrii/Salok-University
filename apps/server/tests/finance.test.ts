import request from 'supertest';
import { app } from '../src/server';
import Payment from '../src/models/Payment';

jest.mock('../src/models/Payment');

describe('Finance Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/v1/finance/payments', () => {
    it('should return 400 if amount is less than 1', async () => {
      const res = await request(app)
        .post('/api/v1/finance/payments')
        .send({
          studentId: 'stud123',
          feeStructureId: 'fee123',
          amount: 0,
          paymentMethod: 'upi'
        });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should successfully record payment', async () => {
      (Payment.create as jest.Mock).mockResolvedValue({ _id: 'pay123', status: 'pending' });

      const res = await request(app)
        .post('/api/v1/finance/payments')
        .send({
          studentId: 'stud123',
          feeStructureId: 'fee123',
          amount: 5000,
          paymentMethod: 'upi'
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe('Payment recorded');
    });
  });
});
