export const setupTransportSocket = (io: any) => {
  io.on('connection', (socket: any) => { console.log('Transport socket connected'); });
};
