import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks.jsx'
import EditBook from './pages/EditBook.jsx'
import UpdateBook from './pages/UpdateBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks/>} /> 
      <Route path='/books/edit/:id' element={<EditBook/>} /> 
      <Route path='/books/update/:id' element={<UpdateBook/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}


export default App