import React from 'react'
import axios from 'axios';
import { loadCart } from '../../utils/cartLoader';
import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';

const DeliveryOptions = ({ deliveryOptions, cartItem, setCart }) => {

    const updateDeliveryOption = async (deliveryOptionId) => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOptionId
        });
        
        axios.get(`/api/cart-items?expand=product`)
            .then((response) => {
                setCart(response.data);
            });
    }

    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE Shipping';
                if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
                }
                return (
                    <div key={deliveryOption.id} className="delivery-option" onClick={() => updateDeliveryOption(deliveryOption.id)}>
                        <input type="radio"
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            onChange={()=>{}}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DeliveryOptions
