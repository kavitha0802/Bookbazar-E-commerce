import express from 'express';
import Book from '../models/bookModel.js';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new book
router.post('/', async (req, res) => {
  const { title, author, price, publishedDate } = req.body;
  const book = new Book({ title, author, price, publishedDate });

  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
