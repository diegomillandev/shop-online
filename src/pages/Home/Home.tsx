import { Box, Container, Grid } from '@mui/material';
import { LoadingIndicator, MuiCard, SelectCategory } from '../../components';
import { useProducts } from '../../store';
import { useEffect, useState } from 'react';
import { useVisorVisibility } from '../../hooks';

export const Home = () => {
    const [category, setCategory] = useState('');
    const { cuantity, visorRef } = useVisorVisibility(8, 4);
    const [products, getProducts] = useProducts((state) => [
        state.products,
        state.getProducts,
    ]);

    useEffect(() => {
        getProducts(cuantity);
    }, [cuantity]);

    const getProductsByCategory =
        category !== 'All Categories' && category
            ? products?.filter((product) => product.category === category)
            : products;

    return (
        <Container maxWidth="lg">
            <Box mt={{ xs: 8, md: 10 }}>
                <SelectCategory category={category} setCategory={setCategory} />
                <Grid container spacing={5} marginTop={0.5}>
                    {products.length !== 0 ? (
                        getProductsByCategory?.map((product) => (
                            <MuiCard key={product.id} product={product} />
                        ))
                    ) : (
                        <LoadingIndicator />
                    )}
                </Grid>
            </Box>
            <Box id="visor" ref={visorRef}></Box>
        </Container>
    );
};
