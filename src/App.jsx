import { useState } from 'react'

import './App.css'
import RegisterStudent from './components/RegisterStudent'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'
import ViewStudent from './components/ViewStudent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RegisterStudent/>}/>
            <Route path='/delete' element={<DeleteStudent/>}/>
            <Route path='/search' element={<SearchStudent/>}/>
            <Route path='/view' element={<ViewStudent/>}/>
          </Routes>
        </BrowserRouter>
      </>
    </>
      )
}

export default App
