import { create } from 'zustand';
import { Product, ProductModal } from '../types';
import { getCategories, getProductsCuantity } from '../services';

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
        try {
            const { data } = await getProductsCuantity(cuantity);
            set({ products: data });
        } catch (error) {}
    },
    getAllCategories: async () => {
        try {
            const { data } = await getCategories();
            set({ categories: data });
        } catch (error) {}
    },
    setProductModal: (ProductModal: ProductModal) => {
        set({ productModal: ProductModal });
    },
}));
