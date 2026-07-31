import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Setup HTTP Server for Socket.io
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
// Note: express-http-proxy handles body parsing for proxied routes automatically,
// so we only apply express.json() to non-proxied routes if needed.

// API Gateway Routes -> Microservices mapping
// In a real env, these target URLs would be loaded from process.env
app.use('/api/v1/auth', proxy('http://localhost:3002'));
app.use('/api/v1/universities', proxy('http://localhost:3002'));
app.use('/api/v1/admissions', proxy('http://localhost:3003'));
app.use('/api/v1/faculty', proxy('http://localhost:3004'));
app.use('/api/v1/library', proxy('http://localhost:3005'));
app.use('/api/v1/hostels', proxy('http://localhost:3005'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

// Socket.io Real-time connection
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`API Gateway & WebSocket Server running on port ${PORT}`);
});