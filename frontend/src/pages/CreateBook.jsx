import React, { useState } from 'react'
import { useBooks } from '../bookdata/book'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';

const CreateBook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    image: "",
    rating: "",
    description: "",
  });

  const { createBook } = useBooks();
  const navigate = useNavigate();

  const handleAddBook = async () => {
    const { success } = await createBook(newBook)
    if (!success) {
      enqueueSnackbar('Error', { variant: 'error' });
    } else {
      enqueueSnackbar('Entry Created Successfully', { variant: 'success' });
      navigate('/');
    }
  }

  return (
    <div className='p-4 m-8'>
      <div className="max-w-lg mx-auto bg-white p-10 rounded-md">
        <div className='mb-5'>
          <h2 className='text-center text-xl'>Create New Entry</h2>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={newBook.name}
            onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
          <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book Title</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            name="floating_author"
            id="floating_author"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
          <label htmlFor="floating_author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
            name="floating_image"
            id="floating_image"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
          <label htmlFor="floating_image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
        </div>

        <label className='text-sm text-gray-500 dark:text-gray-400'>Rating</label>
        <div className="relative z-0 w-full mb-3 group">
          <Rating
            name="simple-controlled"
            precision={0.5}
            value={newBook.rating}
            onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
          />
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Description</label>
          <textarea id="message" rows="4"
            value={newBook.description}
            onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Write your thoughts here..."></textarea>
        </div>

        <button onClick={handleAddBook}
          className='px-4 py-2 bg-emerald-500 rounded-md mr-3 hover:bg-emerald-400 transition duration-150'>
          Create
        </button>

        <BackButton />
      </div>
    </div>
  )
}

export default CreateBook