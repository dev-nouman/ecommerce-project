import React from 'react'
import dayjs from 'dayjs'
import { loadCart } from '../../utils/cartLoader'
import { formatMoney } from '../../utils/money'
import DeliveryOptions from './DeliveryOptions'
import axios from 'axios'

const OrderSummary = ({ cart, deliveryOptions, setCart }) => {

    const deleteCartItem = async (productId) => {
        await axios.delete(`/api/cart-items/${productId}`);

        // Refresh cart after deletion
        loadCart(setCart);
    }

    const updateQuantity = async (productId, quantity) => {
        await axios.put(`/api/cart-items/${productId}`, {
            quantity: quantity
        });

        // Refresh cart after update
        loadCart(setCart);
    }

    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId
                    })

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {selectedDeliveryOption ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D') : 'Select a delivery option'}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(cartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                    </span>
                                    <select onChange={(e) => updateQuantity(cartItem.productId, parseInt(e.target.value))} value={cartItem.quantity} style={{ marginLeft: '5px' }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    <span className="delete-quantity-link link-primary"
                                        onClick={() => deleteCartItem(cartItem.productId)}>
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} setCart={setCart} />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default OrderSummary
