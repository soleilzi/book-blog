import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { FaEdit } from "react-icons/fa";
import DeleteButton from './DeleteButton';

const BookCard = ({ book }) => {
  const formattedDate = new Date(book.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-72 rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:-translate-y-5 hover:shadow-xl">
      <div className='h-[26.5rem] w-full  flex items-center justify-center bg-white'>
      <Link to={`/book/${book._id}`}>
        <img
          className="h-full w-full object-cover"
          src={book.image}
          alt={book.name}
        />
        </Link>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">
          {book.name}
        </div>
        <div className="text-lg mb-1">
          {book.author}
        </div>

        <div className="text-md mb-1 text-gray-500">
          {formattedDate}
        </div>

        <div className="text-lg mb-1">
          <Rating name="read-only" value={book.rating} readOnly precision={0.5} />
        </div>
        <div className='flex justify-between'>
          <Link to={`/book/${book._id}`}>
            <button className="text-gray-700 text-base hover:text-emerald-500 transition duration-150">
              Details
            </button>
          </Link>
          <div className='flex items-center'>
            <Link to={`/book/edit/${book._id}`}>
              <button className="text-gray-700 text-xl mt-[0.18rem] mr-2  hover:text-sky-500 transition duration-150">
                <FaEdit />
              </button>
            </Link>
            <div className="text-gray-700 text-xl  hover:text-red-500 transition duration-150">
              <DeleteButton book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BookCard