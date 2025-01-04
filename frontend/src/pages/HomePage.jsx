import React, { useEffect, useState } from 'react'
import { useBooks } from '../bookdata/book'
import BookCard from '../components/BookCard'
import Spinner from '../components/Spinner';

const HomePage = () => {
  const { fetchBooks, books } = useBooks();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetchBooks();
      setLoading(false);
    }
    fetchData();
  }, [fetchBooks]);

  console.log("books", books);

  return (
    <div className='p-4'>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex justify-center mb-5">
            <h1 className='text-2xl'>
              Entries
            </h1>
          </div>

          <div className='max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 place-items-center'>
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>

  )
}

export default HomePage