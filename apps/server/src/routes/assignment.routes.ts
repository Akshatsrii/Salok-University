import { Router } from 'express';
import { 
  createAssignment, 
  getAssignmentsByCourse, 
  submitAssignment, 
  gradeSubmission 
} from '../controllers/assignment.controller';

const router = Router();

router.post('/', createAssignment);
router.get('/course/:courseId', getAssignmentsByCourse);
router.post('/:id/submit', submitAssignment);
router.put('/:id/grade/:submissionId', gradeSubmission);

export default router;
