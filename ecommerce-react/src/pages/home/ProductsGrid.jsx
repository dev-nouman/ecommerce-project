import React, { useState } from 'react'
import { loadCart } from '../../utils/cartLoader'
import Product from './Product'

const ProductsGrid = ({ products, setCart }) => {


    return (
        <div className="products-grid">

            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} setCart={setCart} />
                )
            })}
        </div>
    )
}

export default ProductsGrid
