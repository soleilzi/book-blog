import React, { useEffect, useState } from 'react';
import { useBooks } from '../bookdata/book';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaEdit } from "react-icons/fa";
import Spinner from '../components/Spinner';
import DeleteButton from '../components/DeleteButton';
import BackButton from '../components/BackButton';

const ViewBook = () => {
  const { id } = useParams();
  const { fetchBookByID, book } = useBooks();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await fetchBookByID(id);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchBookByID, id]);

  if (loading) return <div className='flex items-center justify-center h-screen'><Spinner /></div>;
  if (!book) return <div className="text-center text-gray-500">Book not found</div>;

  const formattedDate = new Date(book.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='p-4'>
      <h1 className='text-center mb-5 text-2xl'>Entry Details</h1>
      <div className='max-w-screen-md mx-auto'>
        <div className='mt-2 flex h-[32rem] rounded-md bg-tan-50'>

          {/* left section for image */}
          <div className='w-3/7 p-2 flex items-center'>
            <img
              className='h-[30rem] w-80 object-contain'
              src={book.image}
              alt={book.name || 'Book cover'}
            />
          </div>

          {/* right section for book contents */}
          <div className='flex-1 p-4'>
            {/* grid section for label + value pairs */}
            <div className="space-y-2">
              {/* title */}
              <div className="flex items-center">
                <p className="w-1/6 text-sm font-bold text-gray-400">Title</p>
                <h1 className="text-2xl font-bold">{book.name}</h1>
              </div>

              {/* author */}
              <div className="flex items-center">
                <p className="w-1/6 text-sm font-bold text-gray-400">Author</p>
                <h2>{book.author}</h2>
              </div>

              {/* date */}
              <div className="flex items-center">
                <p className="w-1/6 text-sm font-bold text-gray-400">Date</p>
                <h2 className="text-gray-500">{formattedDate}</h2>
              </div>

              {/* rating */}
              <div className="flex items-center">
                <p className="w-1/6 text-sm font-bold text-gray-400">Rating</p>
                <Rating
                  name="read-only"
                  value={book.rating || 0}
                  readOnly
                  precision={0.5}
                />
              </div>
            </div>

            {/* button section */}
            <div className='flex items-center mt-4'>
              <Link to={`/book/edit/${book._id}`}>
                <button className="text-gray-700 text-2xl mr-3 hover:text-sky-500 transition duration-150">
                  <FaEdit />
                </button>
              </Link>

              <div className="text-gray-700 text-2xl  hover:text-red-500 transition duration-150">
                <DeleteButton book={book} />
              </div>
            </div>

            {/* description section */}
            <div className='mt-2'>
              <p className="text-sm font-bold text-gray-400">Description</p>
              <h3>{book.description}</h3>
            </div>
          </div>
        </div>
        <div className="py-4">
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
