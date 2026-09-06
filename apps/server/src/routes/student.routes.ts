import { Router } from 'express';
import { getStudents, getStudentById, createStudent, importStudents } from '../controllers/student.controller';

const router = Router();
router.get('/', getStudents);
router.post('/', createStudent);
router.post('/bulk-import', importStudents);
router.get('/:id', getStudentById);
export default router;
