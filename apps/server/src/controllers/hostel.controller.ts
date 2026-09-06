import { Request, Response } from 'express';

export const getHostelOverview = async (req: Request, res: Response) => res.json({ message: 'Hostel overview' });
export const getRooms = async (req: Request, res: Response) => res.json([]);
export const createRoom = async (req: Request, res: Response) => res.json({});
export const allocateRoom = async (req: Request, res: Response) => res.json({});
export const getComplaints = async (req: Request, res: Response) => res.json([]);
export const createComplaint = async (req: Request, res: Response) => res.json({});
export const updateComplaintStatus = async (req: Request, res: Response) => res.json({});
export const getGatePasses = async (req: Request, res: Response) => res.json([]);
export const requestGatePass = async (req: Request, res: Response) => res.json({});
export const decideGatePass = async (req: Request, res: Response) => res.json({});
