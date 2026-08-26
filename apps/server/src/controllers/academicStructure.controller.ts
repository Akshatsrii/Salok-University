import { Request, Response } from 'express';
import { Department } from '../models/Department';
import { Course } from '../models/Course';

export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json({ message: 'Department created', data: department });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find().populate('department');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ message: 'Course created', data: course });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
