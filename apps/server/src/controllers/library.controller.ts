import { Request, Response } from 'express';
import { Book, IssueBook } from '../models/Library';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().lean();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error adding book' });
  }
};

export const issueBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);
    if (!book || book.availableCopies <= 0) {
      return res.status(400).json({ message: 'Book not available' });
    }
    book.availableCopies -= 1;
    await book.save();
    
    const issue = await IssueBook.create(req.body);
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ message: 'Error issuing book' });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { issueId } = req.params;
    const issue = await IssueBook.findById(issueId);
    if (!issue || issue.status === 'RETURNED') return res.status(400).json({ message: 'Invalid return request' });
    
    issue.status = 'RETURNED';
    issue.returnDate = new Date();
    await issue.save();
    
    await Book.findByIdAndUpdate(issue.bookId, { $inc: { availableCopies: 1 } });
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: 'Error returning book' });
  }
};
