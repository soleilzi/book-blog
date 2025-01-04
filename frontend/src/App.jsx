import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreateBook from './pages/CreateBook'
import ViewBook from './pages/ViewBook'
import AboutPage from './pages/AboutPage'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreateBook />} />
      <Route path='/book/:id' element={<ViewBook />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/book/edit/:id' element={<EditBook />} />
    </Routes>
    </>
  )
}

export default App