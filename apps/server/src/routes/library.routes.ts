import { Router } from 'express';
import { getBooks, addBook, issueBook, returnBook } from '../controllers/library.controller';

const router = Router();
router.get('/books', getBooks);
router.post('/books', addBook);
router.post('/issues', issueBook);
router.patch('/issues/:issueId/return', returnBook);
export default router;
