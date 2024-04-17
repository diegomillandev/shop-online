import { Container, Grid } from '@mui/material';
import { MuiCard, MuiNabvar } from '../components';
import {
    ProductModalType,
    ProductType,
    ProductTypeCart,
    ProductsType,
} from '../types/Products';
import { useEffect, useState } from 'react';

export const HomePage = ({
    products,
    handleOpen,
    setProductoModal,
    addToCart,
    cartItems,
    deleteToCart,
    addItemCart,
    deletItemCart,
    quantityInCart,
    clearCart,
    inputSearch,
    setInputSearch,
}: {
    products: ProductsType;
    handleOpen: () => void;
    setProductoModal: React.Dispatch<React.SetStateAction<ProductModalType>>;
    addToCart: (product: ProductType) => void;
    cartItems: ProductTypeCart[];
    deleteToCart: (id: ProductTypeCart['id']) => void;
    addItemCart: (id: ProductTypeCart['id']) => void;
    deletItemCart: (id: ProductTypeCart['id']) => void;
    quantityInCart: (id: number) => number;
    clearCart: () => void;
    inputSearch: string;
    setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const [category, setCategory] = useState('');
    const getCategories = (): string[] => {
        const categories: Set<string> = new Set();
        products?.map((product) => categories.add(product.category));
        return Array.from(categories);
    };

    inputSearch = inputSearch.toLowerCase();

    useEffect(() => {
        if (inputSearch !== '') {
            setCategory('');
        }
    }, [inputSearch]);

    const getProductsByCategory = category
        ? products?.filter((product) => product.category === category)
        : inputSearch
        ? products.filter((product) =>
              product.title.toLowerCase().includes(inputSearch)
          )
        : products;

    return (
        <>
            <MuiNabvar
                cartItems={cartItems}
                deleteToCart={deleteToCart}
                addItemCart={addItemCart}
                deletItemCart={deletItemCart}
                clearCart={clearCart}
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
            />
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ mt: 1, mb: 5 }}>
                    <div className="w-full flex justify-end mt-5">
                        <select
                            name=""
                            id=""
                            onChange={(e) => setCategory(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md capitalize text-black w-2/4 md:w-1/4"
                            value={category}
                        >
                            <option value="">All Categories</option>
                            {getCategories().map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    {getProductsByCategory?.map((product) => (
                        <MuiCard
                            key={product.id}
                            product={product}
                            handleOpen={handleOpen}
                            setProductoModal={setProductoModal}
                            addToCart={addToCart}
                            quantityInCart={quantityInCart}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};
