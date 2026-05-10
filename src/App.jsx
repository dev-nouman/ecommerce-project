import { Routes, Route } from 'react-router'
import React from 'react'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>


    </>
  )
}

export default App
