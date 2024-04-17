import { useState } from 'react';
import axios from 'axios';
import {
    ProductModalType,
    ProductSchema,
    ProductsType,
} from '../types/Products';
export const useStore = () => {
    const [products, setProducts] = useState<ProductsType>([]);
    const [productoModal, setProductoModal] = useState<ProductModalType>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0,
        },
        procentaje: 0,
    });
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );
            const productsResult = ProductSchema.array().safeParse(
                response.data
            );
            if (productsResult.success) {
                const products: ProductsType = productsResult.data;
                setProducts(products);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return {
        products,
        productoModal,
        setProductoModal,
        fetchAllProducts,
    };
};
