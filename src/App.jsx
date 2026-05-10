import { Routes, Route } from 'react-router'
import React from 'react'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<div>test</div>} />
      </Routes>


    </>
  )
}

export default App
