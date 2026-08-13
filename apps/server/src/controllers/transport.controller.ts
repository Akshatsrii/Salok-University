import { Request, Response } from 'express';
import { Bus, BusStop, StudentBoarding } from '../models/Transport';

export const getBuses = async (req: Request, res: Response) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching buses' });
  }
};

export const getRouteStops = async (req: Request, res: Response) => {
  try {
    const { routeId } = req.params;
    const stops = await BusStop.find({ routeId }).sort({ order: 1 });
    res.json(stops);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching route stops' });
  }
};

export const updateBusLocation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { lat, lng } = req.body;
    
    const bus = await Bus.findByIdAndUpdate(id, { currentLocation: { lat, lng } }, { new: true });
    
    // In a real scenario, this endpoint might be called by an IoT device on the bus
    // and would trigger a notification via notification-service if nearing a stop
    
    res.json(bus);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating bus location' });
  }
};

export const logBoarding = async (req: Request, res: Response) => {
  try {
    const { studentId, busId, stopId, type } = req.body;
    const log = new StudentBoarding({ studentId, busId, stopId, type });
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: 'Server error logging boarding' });
  }
};
