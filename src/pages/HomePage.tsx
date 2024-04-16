import { Container, Grid } from '@mui/material';
import { MuiCard, MuiNabvar } from '../components';
import { ProductsType } from '../types/Products';

export const HomePage = ({ products }: { products: ProductsType }) => {
    return (
        <>
            <MuiNabvar />
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ my: 5 }}>
                    {products?.map((product) => (
                        <MuiCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Container>
        </>
    );
};
