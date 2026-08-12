import { Request, Response } from 'express';
import { Room, HostelComplaint, GatePass } from '../models/Hostel';

export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await Room.find().populate('occupants', 'name email rollNumber');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching rooms' });
  }
};

export const allocateRoom = async (req: Request, res: Response) => {
  try {
    const { roomId, studentId } = req.body;
    const room = await Room.findById(roomId);
    
    if (!room) return res.status(404).json({ error: 'Room not found' });
    if (room.occupants.length >= room.capacity) return res.status(400).json({ error: 'Room is full' });
    
    room.occupants.push(studentId);
    if (room.occupants.length === room.capacity) room.status = 'FULL';
    
    await room.save();
    res.json({ message: 'Room allocated successfully', room });
  } catch (error) {
    res.status(500).json({ error: 'Server error allocating room' });
  }
};

export const createComplaint = async (req: Request, res: Response) => {
  try {
    const complaint = new HostelComplaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating complaint' });
  }
};

export const applyGatePass = async (req: Request, res: Response) => {
  try {
    const pass = new GatePass(req.body);
    await pass.save();
    res.status(201).json(pass);
  } catch (error) {
    res.status(500).json({ error: 'Server error applying gate pass' });
  }
};

export const approveGatePass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'APPROVED' or 'REJECTED'
    
    const pass = await GatePass.findByIdAndUpdate(id, { status }, { new: true });
    res.json(pass);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating gate pass' });
  }
};
