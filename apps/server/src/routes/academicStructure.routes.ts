import { Router } from 'express';
import { getAllDepartments, createDepartment, getAllCourses, createCourse } from '../controllers/academicStructure.controller';

const router = Router();

router.get('/departments', getAllDepartments);
router.post('/departments', createDepartment);
router.get('/courses', getAllCourses);
router.post('/courses', createCourse);

export default router;
