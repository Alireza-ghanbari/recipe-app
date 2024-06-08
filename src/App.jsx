import React from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritePage from './components/pages/FavoritePage'

export default function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route exatc path='/' element={<HomePage/>}/>
        <Route path='/favorite' element={<FavoritePage/>} />
      </Routes>
    </div>
  )
}
