import { Request, Response } from 'express';
import { Notice, Complaint, Notification, AuditLog } from '../models/Communication';
import mongoose from 'mongoose';

// Notices
export const createNotice = async (req: Request, res: Response) => {
  try {
    const { title, content, targetScope, targetBranch, channels, createdBy } = req.body;
    const notice = new Notice({ title, content, targetScope, targetBranch, channels, createdBy });
    await notice.save();

    // Log action
    await AuditLog.create({
      action: 'CREATE_NOTICE',
      performedBy: createdBy,
      targetResource: notice._id.toString(),
      details: `Created notice for ${targetScope}`
    });

    res.status(201).json(notice);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Complaints
export const submitComplaint = async (req: Request, res: Response) => {
  try {
    const { subject, description, submittedBy, category } = req.body;
    
    // Stub AI categorization
    const aiCategory = 'GENERAL_INQUIRY';
    const priority = 'MEDIUM';

    const complaint = new Complaint({
      subject, description, submittedBy, category, aiCategory, priority
    });
    await complaint.save();
    
    res.status(201).json(complaint);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getComplaints = async (req: Request, res: Response) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateComplaintStatus = async (req: Request, res: Response) => {
  try {
    const { status, resolutionNotes, adminId } = req.body;
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status, resolutionNotes },
      { new: true }
    );
    
    if (!complaint) return res.status(404).json({ error: 'Complaint not found' });

    await AuditLog.create({
      action: 'UPDATE_COMPLAINT_STATUS',
      performedBy: adminId,
      targetResource: complaint._id.toString(),
      details: `Updated complaint status to ${status}`
    });

    res.json(complaint);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Notifications
export const getUserNotifications = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ recipient: userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const markNotificationRead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
    res.json(notification);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Audit Logs
export const getAuditLogs = async (req: Request, res: Response) => {
  try {
    const logs = await AuditLog.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
