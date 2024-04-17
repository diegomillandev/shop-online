import { useState } from 'react';
import { ProductsType } from '../types/Products';

export const useCart = () => {
    const [cartItems, setCartItems] = useState<ProductsType>([]);

    return {
        cartItems,
        setCartItems,
    };
};
