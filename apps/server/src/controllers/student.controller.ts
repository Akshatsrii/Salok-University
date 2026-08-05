import { Request, Response } from 'express';
import { Student } from '../models/Student';

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = new Student({
      ...req.body,
      tenantId: req.body.tenantId || '60d5ec49f1b2c8b1f8e4e1a1', // Mock tenant for now
    });
    await student.save();
    res.status(201).json({ success: true, data: student });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find(req.query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: students });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const bulkImportStudents = async (req: Request, res: Response) => {
  try {
    const { students } = req.body; // Array of student data
    if (!students || !Array.isArray(students)) {
      return res.status(400).json({ success: false, message: 'Invalid data format' });
    }
    const inserted = await Student.insertMany(students);
    res.status(201).json({ success: true, data: inserted, message: `${inserted.length} students imported successfully` });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
