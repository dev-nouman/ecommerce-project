import axios from 'axios';

export const loadCart = (setCart) => {
    return axios.get(`/api/cart-items?expand=product`)
        .then((response) => {
            setCart(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error loading cart:', error);
        });
};
