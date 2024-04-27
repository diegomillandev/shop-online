import { create } from 'zustand';
import { Product, ProductModal } from '../types';

interface State {
    products: Product[];
    categories: string[];
    productModal: ProductModal;
    getProducts: (cuantity: number) => Promise<void>;
    getAllCategories: () => Promise<void>;
    setProductModal: (product: ProductModal) => void;
}

export const useProducts = create<State>((set) => ({
    products: [],
    categories: [],
    productModal: {} as ProductModal,
    getProducts: async (cuantity: number) => {
        const res = await fetch(
            `https://fakestoreapi.com/products?limit=${cuantity}`
        );
        const data = await res.json();
        set({ products: data });
    },
    getAllCategories: async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        set({ categories: data });
    },
    setProductModal: (ProductModal: ProductModal) => {
        set({ productModal: ProductModal });
    },
}));
