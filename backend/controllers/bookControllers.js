import Book from '../models/bookModel.js';
import mongoose from 'mongoose';

export const createBook = async (request, response) => {
  const book = request.body;

  if(!book.name || !book.author || !book.image || !book.description){
    response.status(400).json({success:false, message: "Please provide all fields."});
  }

  const newBook = new Book(book);

  try {
    await newBook.save();
    response.status(201).json({ success:true, data:newBook });
  } catch (error) {
    console.error("Error in Create", error.message);
    response.status(500).json({ success:false, data:newBook });
  }
}

export const getBooks = async (request, response) => {
  try {
    const books = await Book.find({})
    response.status(200).json({ success:true, count:books.length, data:books });
  } catch (error) {
    console.error("Error in fetching books", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const getBook = async (request, response) => {
  const { id } = request.params;
  try {
    const book = await Book.findById(id);
    response.status(200).json({ success:true, data:book });
  } catch (error) {
    console.error("Error in fetching book", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const updateBook = async (request, response) => {
  const { id } = request.params;
  const book = request.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ success:false, message:"Book Not Found" })
  }

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, {new:true});
    response.status(200).json({ success:true, data:updatedBook });
  } catch (error) {
    console.error("Error in updating book: ", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const deleteBook = async (request, response) => {
  const { id } = request.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ success:false, message:"Book Not Found" })
  }

  try {
    await Book.findByIdAndDelete(id);
    response.status(200).json({ success:true, message:"Book has been successfully deleted." });
  } catch (error) {
    console.error("Error in deleting product: ", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};