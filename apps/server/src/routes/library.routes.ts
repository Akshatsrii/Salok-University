import { Router } from 'express';
import { getAllBooks, addBook, issueBook, getIssuedBooks } from '../controllers/library.controller';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.get('/issues', getIssuedBooks);
router.post('/issues', issueBook);

export default router;
