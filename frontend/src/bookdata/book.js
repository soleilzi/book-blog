import { create } from 'zustand'

export const useBooks = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),

  fetchBooks: async () => {
    const res = await fetch("/api/books");
    const data = await res.json()
    set({ books: data.data });
  },

  fetchBookByID: async (bid) => {
    const res = await fetch(`/api/books/${bid}`);
    const data = await res.json()
    if (data.success) {
      set({ book: data.data });
      return { success: true, book: data.data }
    }
    return { success: false, message: data.message };
  },

  createBook: async (newBook) => {
    if (!newBook.name || !newBook.author || !newBook.image || !newBook.description) {
      return { success: false, message: "Please enter all fields." };
    }
    const res = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }))
    return { success: true, message: "Book created successfully." };
  },

  updateBook: async (bid, updatedBook) => {
    const res = await fetch(`/api/books/${bid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message }

    set((state) => ({
      books: state.books.map((book) => book._id === bid ? data.data : book)
    }))
    return { success: true, message: data.message };
  },

  deleteBook: async (bid) => {
    const res = await fetch(`/api/books/${bid}`, {
      method:"DELETE",
    });
    const data = await res.json();
    if(!data.success) return {success:false, message:data.message};
    set(state => ({ books: state.books.filter(book => book._id !== bid)}));
    return {success:true, message:data.message};
  }

}))