import { useState } from 'react';
import axios from 'axios';
import { ProductSchema, ProductsType } from '../types/Products';
export const useStore = () => {
    const [products, setProducts] = useState<ProductsType>([]);
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
        fetchAllProducts,
    };
};
