import { Container, Grid } from '@mui/material';
import { LoadingIndicator, MuiCard, SelectCategory } from '../../components';
import { useProducts } from '../../store';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [category, setCategory] = useState('');

    const [products, getAllProducts] = useProducts((state) => [
        state.products,
        state.getAllProducts,
    ]);

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    const getProductsByCategory =
        category !== 'All Categories' && category
            ? products?.filter((product) => product.category === category)
            : products;

    return (
        <Container maxWidth="lg" sx={{ mt: 8, md: { mt: 10 } }}>
            <SelectCategory category={category} setCategory={setCategory} />
            <Grid container spacing={5} sx={{ mt: 0.5, mb: 5 }}>
                {products.length !== 0 ? (
                    getProductsByCategory?.map((product) => (
                        <MuiCard key={product.id} product={product} />
                    ))
                ) : (
                    <LoadingIndicator />
                )}
            </Grid>
        </Container>
    );
};
