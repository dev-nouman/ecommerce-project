import React, { useState } from 'react'
import Product from './Product'

const ProductsGrid = ({ products, setCart }) => {


    return (
        <div className="products-grid">

            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default ProductsGrid
