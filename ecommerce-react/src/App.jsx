import axios from 'axios'
import { Routes, Route } from 'react-router'
import React, { useEffect, useState } from 'react'
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrdersPage from './pages/orders/OrdersPage'
import { loadCart } from './utils/cartLoader'
import './App.css'

const App = () => {


  const [cart, setCart] = useState([]);
  useEffect(() => {
    loadCart(setCart);
  }, [])

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} setCart={setCart} />} />
      </Routes>
 

    </>
  )
}

export default App
