import { create } from 'zustand';
import { CartItem } from '../types';

interface State {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    deleteItemCart: (id: number) => void;
    subQuantityItem: (id: number) => void;
    addQuantityItem: (id: number) => void;
    clearCart: () => void;
}

export const useCart = create<State>((set, get) => ({
    cart: [],
    addToCart: (product: CartItem) => {
        const existingProduct = get().cart.find(
            (item) => item.id === product.id
        );
        if (existingProduct) {
            const newCart = get().cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: product.quantity,
                    };
                }
                return item;
            });
            set(() => ({ cart: newCart }));
            return;
        } else {
            set(() => ({ cart: [...get().cart, product] }));
        }
    },
    deleteItemCart: (id: number) => {
        const newCart = get().cart.filter((item) => item.id !== id);
        set(() => ({ cart: newCart }));
    },
    subQuantityItem: (id: number) => {
        const existingProduct = get().cart.find((item) => item.id === id);
        if (existingProduct) {
            const newCart = get()
                .cart.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);
            set(() => ({ cart: newCart }));
        }
    },
    addQuantityItem: (id: number) => {
        const existingProduct = get().cart.find((item) => item.id === id);
        if (existingProduct) {
            const newCart = get().cart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity:
                            item.quantity === 10
                                ? item.quantity
                                : item.quantity + 1,
                    };
                }
                return item;
            });
            set(() => ({ cart: newCart }));
        }
    },
    clearCart: () => {
        set(() => ({ cart: [] }));
    },
}));
