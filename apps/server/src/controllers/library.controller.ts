import { Request, Response } from 'express';
import Book from '../models/Book';
import IssueBook from '../models/IssueBook';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: 'Book added', data: book });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const issueBook = async (req: Request, res: Response) => {
  try {
    const { bookId, userId, userModel, dueDate } = req.body;
    
    const book = await Book.findById(bookId);
    if (!book || book.availableCopies <= 0) {
      return res.status(400).json({ message: 'Book not available' });
    }

    const issue = await IssueBook.create({ bookId, userId, userModel, dueDate });
    book.availableCopies -= 1;
    await book.save();

    res.status(201).json({ message: 'Book issued successfully', data: issue });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getIssuedBooks = async (req: Request, res: Response) => {
  try {
    const issuedBooks = await IssueBook.find().populate('bookId').populate('userId');
    res.status(200).json(issuedBooks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
