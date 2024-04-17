import { Container, Grid } from '@mui/material';
import { MuiCard, MuiNabvar } from '../components';
import {
    ProductModalType,
    ProductType,
    ProductTypeCart,
    ProductsType,
} from '../types/Products';

export const HomePage = ({
    products,
    handleOpen,
    setProductoModal,
    addToCart,
    cartItems,
    deleteToCart,
    addItemCart,
    deletItemCart,
}: {
    products: ProductsType;
    handleOpen: () => void;
    setProductoModal: React.Dispatch<React.SetStateAction<ProductModalType>>;
    addToCart: (product: ProductType) => void;
    cartItems: ProductTypeCart[];
    deleteToCart: (id: ProductTypeCart['id']) => void;
    addItemCart: (id: ProductTypeCart['id']) => void;
    deletItemCart: (id: ProductTypeCart['id']) => void;
}) => {
    return (
        <>
            <MuiNabvar
                cartItems={cartItems}
                deleteToCart={deleteToCart}
                addItemCart={addItemCart}
                deletItemCart={deletItemCart}
            />
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ mt: 1, mb: 5 }}>
                    {products?.map((product) => (
                        <MuiCard
                            key={product.id}
                            product={product}
                            handleOpen={handleOpen}
                            setProductoModal={setProductoModal}
                            addToCart={addToCart}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};
