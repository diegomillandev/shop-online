import { Container, Grid } from '@mui/material';
import { MuiCard, MuiNabvar } from '../components';
import { ProductModalType, ProductsType } from '../types/Products';

export const HomePage = ({
    products,
    handleOpen,
    setProductoModal,
}: {
    products: ProductsType;
    handleOpen: () => void;
    setProductoModal: React.Dispatch<React.SetStateAction<ProductModalType>>;
}) => {
    return (
        <>
            <MuiNabvar />
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ mt: 1, mb: 5 }}>
                    {products?.map((product) => (
                        <MuiCard
                            key={product.id}
                            product={product}
                            handleOpen={handleOpen}
                            setProductoModal={setProductoModal}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};
