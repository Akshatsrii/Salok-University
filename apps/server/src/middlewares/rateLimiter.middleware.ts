import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

// Attempt to connect to Redis
// Fallback to memory store if REDIS_URL is not provided (useful for local dev without redis)
const redisClient = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : undefined;

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes',
  ...(redisClient && {
    store: new RedisStore({
      sendCommand: (...args: string[]) => redisClient.call(...args),
    }),
  }),
});

export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 login requests per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many login attempts, please try again after an hour',
  ...(redisClient && {
    store: new RedisStore({
      sendCommand: (...args: string[]) => redisClient.call(...args),
    }),
  }),
});

export const paymentLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 payment requests per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many payment attempts, please try again later',
  ...(redisClient && {
    store: new RedisStore({
      sendCommand: (...args: string[]) => redisClient.call(...args),
    }),
  }),
});
