import { Box, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingIndicator, MuiCard, SelectCategory } from '../../components';
import { useVisorVisibility } from '../../hooks';
import { useEvents, useProducts } from '../../store';

export const Home = () => {
    const [category, setCategory] = useState('');
    const { cuantity, visorRef } = useVisorVisibility(8, 4);
    const [products, getProducts] = useProducts((state) => [
        state.products,
        state.getProducts,
    ]);
    const searchItem = useEvents((state) => state.searchItem);

    useEffect(() => {
        document.title = 'FakeStore - Home';
    }, []);

    useEffect(() => {
        getProducts(cuantity);
    }, [cuantity]);

    useEffect(() => {
        if (searchItem !== '') {
            setCategory('');
        }
    }, [searchItem]);
    const getProductsByCategory =
        category !== 'All Categories' && category
            ? products?.filter((product) => product.category === category)
            : searchItem !== ''
              ? products?.filter((product) =>
                    product.title
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()),
                )
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
