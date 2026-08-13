// This is a stub for socket.io implementation for live tracking
import { Server, Socket } from 'socket.io';

export const initTransportSockets = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`New client connected to transport socket: ${socket.id}`);

    // Driver/IoT device sends location updates
    socket.on('bus_location_update', (data: { busId: string; lat: number; lng: number }) => {
      // Broadcast to everyone listening for this bus
      io.to(`bus_${data.busId}`).emit('location_changed', {
        lat: data.lat,
        lng: data.lng,
        timestamp: new Date().toISOString()
      });
      
      // In a real app, we would also:
      // 1. Update the DB sparingly (e.g. every 1 minute instead of every second)
      // 2. Check if the distance to the next stop is < 500m
      // 3. If yes, trigger a message via notification-service to parents/students waiting at that stop
    });

    // Students/Parents subscribe to a specific bus to track
    socket.on('subscribe_bus', (busId: string) => {
      socket.join(`bus_${busId}`);
      console.log(`Client ${socket.id} subscribed to bus_${busId}`);
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected from transport socket: ${socket.id}`);
    });
  });
};
