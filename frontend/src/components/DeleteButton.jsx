import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useBooks } from '../bookdata/book';
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useSnackbar } from 'notistack';

const DeleteButton = ({ book }) => {
  const { deleteBook } = useBooks();
  let [isOpen, setIsOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async (bid) => {
    const { success } = await deleteBook(bid);
    if(!success) {
      enqueueSnackbar('Error', { variant: 'error' });
    } else {
      enqueueSnackbar('Entry Deleted Successfully', { variant: 'success' });
      setIsOpen(false);
    }
  }
  return (
    <>
    <button onClick={() => setIsOpen(true)}><MdDelete/></button>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border border-emerald-500 bg-white p-12">
          <DialogTitle className="font-bold">Delete <span className='text-gray-500'>{book.name}</span>?</DialogTitle>
          <Description>This will permanently delete this entry.</Description>
          <p>Are you sure you want to delete this entry? All data will be permanently removed.</p>
          <div className="flex gap-4">
            <button className='px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-200 transition duration-150'
              onClick={() => setIsOpen(false)}>Cancel</button>

            <button className='px-4 py-2 rounded-lg bg-red-500 hover:bg-red-300 transition duration-150'
              onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </>
  )
}

export default DeleteButton