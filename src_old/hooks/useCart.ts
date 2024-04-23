import { useState } from 'react';
import {
    ProductType,
    ProductTypeCart,
    ProductsTypeCart,
} from '../types/Products';

const localStorageCart = (): ProductsTypeCart => {
    const cart = localStorage.getItem('cartItems');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
};

export const useCart = () => {
    const [cartItems, setCartItems] = useState<ProductsTypeCart>(
        localStorageCart()
    );

    const addToCart = (product: ProductType) => {
        const existingProduct = cartItems.find(
            (cartProduct) => cartProduct.id === product.id
        );

        if (existingProduct) {
            const updatedCartItems = cartItems.map((cartProduct) =>
                cartProduct.id === product.id
                    ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
                    : cartProduct
            );
            setCartItems(updatedCartItems);
        } else {
            const newCartItem = { ...product, quantity: 1 };
            setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
        }
    };

    const deleteToCart = (id: ProductTypeCart['id']) => {
        const updatedCartItems = cartItems
            .map((cartProduct) => {
                if (cartProduct.id === id) {
                    return {
                        ...cartProduct,
                        quantity:
                            cartProduct.quantity > 0
                                ? cartProduct.quantity - 1
                                : 0,
                    };
                }
                return cartProduct;
            })
            .filter((cartProduct) => cartProduct.quantity > 0);
        setCartItems(updatedCartItems);
    };

    const addItemCart = (id: ProductTypeCart['id']) => {
        const updatedCartItems = cartItems
            .map((cartProduct) => {
                if (cartProduct.id === id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + 1,
                    };
                }
                return cartProduct;
            })
            .filter((cartProduct) => cartProduct.quantity > 0);
        setCartItems(updatedCartItems);
    };

    const deletItemCart = (id: ProductTypeCart['id']) => {
        const updatedCartItems = cartItems
            .map((cartProduct) => {
                if (cartProduct.id === id) {
                    return {
                        ...cartProduct,
                        quantity: 0,
                    };
                }
                return cartProduct;
            })
            .filter((cartProduct) => cartProduct.quantity > 0);
        setCartItems(updatedCartItems);
    };

    const quantityInCart = (id: ProductTypeCart['id']) => {
        const product = cartItems.find((cartProduct) => cartProduct.id === id);
        if (product) {
            return product.quantity;
        }
        return 0;
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return {
        cartItems,
        setCartItems,
        addToCart,
        deleteToCart,
        addItemCart,
        deletItemCart,
        quantityInCart,
        clearCart,
    };
};