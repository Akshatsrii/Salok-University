import { Request, Response } from 'express';
import { Room, HostelComplaint, GatePass } from '../models/Hostel';

// GET /api/v1/hostel/rooms?block=&status=
export const getRooms = async (req: Request, res: Response) => {
  try {
    const { block, status } = req.query;
    const filter: Record<string, any> = {};
    if (block) filter.block = block;
    if (status) filter.status = status;

    const rooms = await Room.find(filter).populate('occupants', 'name email').lean();
    res.json(rooms);
  } catch (err) {
    console.error('getRooms error:', err);
    res.status(500).json({ message: 'Could not fetch rooms' });
  }
};

// POST /api/v1/hostel/rooms — warden creates a room
export const createRoom = async (req: Request, res: Response) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    console.error('createRoom error:', err);
    res.status(500).json({ message: 'Could not create room' });
  }
};

// POST /api/v1/hostel/rooms/:roomId/allocate — assign a student into a room
export const allocateRoom = async (req: Request, res: Response) => {
  try {
    const { roomId } = req.params;
    const { studentUserId } = req.body;

    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    if (room.occupants.length >= room.capacity) {
      return res.status(400).json({ message: 'Room is already at full capacity' });
    }

    room.occupants.push(studentUserId);
    if (room.occupants.length >= room.capacity) room.status = 'FULL';
    await room.save();

    res.json(room);
  } catch (err) {
    console.error('allocateRoom error:', err);
    res.status(500).json({ message: 'Could not allocate room' });
  }
};

// --- Complaints ---

// GET /api/v1/hostel/complaints?status=
export const getComplaints = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const filter: Record<string, any> = {};
    if (status) filter.status = status;

    const complaints = await HostelComplaint.find(filter)
      .populate('studentId', 'name email')
      .populate('roomId', 'roomNumber block')
      .sort({ createdAt: -1 })
      .lean();
    res.json(complaints);
  } catch (err) {
    console.error('getComplaints error:', err);
    res.status(500).json({ message: 'Could not fetch complaints' });
  }
};

// POST /api/v1/hostel/complaints — student raises a complaint
export const createComplaint = async (req: Request, res: Response) => {
  try {
    const complaint = await HostelComplaint.create(req.body);
    res.status(201).json(complaint);
  } catch (err) {
    console.error('createComplaint error:', err);
    res.status(500).json({ message: 'Could not raise complaint' });
  }
};

// PATCH /api/v1/hostel/complaints/:id/status — warden updates status
export const updateComplaintStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const complaint = await HostelComplaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });
    res.json(complaint);
  } catch (err) {
    console.error('updateComplaintStatus error:', err);
    res.status(500).json({ message: 'Could not update complaint' });
  }
};

// --- Gate Passes ---

// GET /api/v1/hostel/gate-passes?status=
export const getGatePasses = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const filter: Record<string, any> = {};
    if (status) filter.status = status;

    const passes = await GatePass.find(filter).populate('studentId', 'name email').sort({ createdAt: -1 }).lean();
    res.json(passes);
  } catch (err) {
    console.error('getGatePasses error:', err);
    res.status(500).json({ message: 'Could not fetch gate passes' });
  }
};

// POST /api/v1/hostel/gate-passes — student requests a gate pass
export const requestGatePass = async (req: Request, res: Response) => {
  try {
    const pass = await GatePass.create(req.body);
    res.status(201).json(pass);
  } catch (err) {
    console.error('requestGatePass error:', err);
    res.status(500).json({ message: 'Could not create gate pass request' });
  }
};

// PATCH /api/v1/hostel/gate-passes/:id — warden approves/rejects
export const decideGatePass = async (req: Request, res: Response) => {
  try {
    const { status } = req.body; // 'APPROVED' | 'REJECTED'
    const pass = await GatePass.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!pass) return res.status(404).json({ message: 'Gate pass not found' });
    res.json(pass);
  } catch (err) {
    console.error('decideGatePass error:', err);
    res.status(500).json({ message: 'Could not update gate pass' });
  }
};

// GET /api/v1/hostel/overview — dashboard stats for the Facility Portal
export const getHostelOverview = async (req: Request, res: Response) => {
  try {
    const [totalRooms, fullRooms, openComplaints, pendingPasses] = await Promise.all([
      Room.countDocuments(),
      Room.countDocuments({ status: 'FULL' }),
      HostelComplaint.countDocuments({ status: { $ne: 'RESOLVED' } }),
      GatePass.countDocuments({ status: 'PENDING' }),
    ]);

    res.json({
      totalRooms,
      occupancyPercent: totalRooms > 0 ? Math.round((fullRooms / totalRooms) * 100) : 0,
      openComplaints,
      pendingGatePasses: pendingPasses,
    });
  } catch (err) {
    console.error('getHostelOverview error:', err);
    res.status(500).json({ message: 'Could not fetch hostel overview' });
  }
};
