import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import './HomePage.css'
import ProductsGrid from './ProductsGrid'

const HomePage = ({ cart, setCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            })
    }, [])

    return (
        <>
            <title>Ecommerce</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} setCart={setCart} />
            </div>
        </>
    )
}

export default HomePage
