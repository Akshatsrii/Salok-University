import { Router } from 'express';
import { createStudent, getStudents, getStudentById, bulkImportStudents } from '../controllers/student.controller';

const router = Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/bulk-import', bulkImportStudents);

export default router;
