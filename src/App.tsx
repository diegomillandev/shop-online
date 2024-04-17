import { useEffect, useState } from 'react';
import { useStore } from './hooks/useStore';
import { HomePage } from './pages';
import { AppTheme } from './theme';
import { TSSModal } from './components';
import { useCart } from './hooks/useCart';

export const App = () => {
    const { products, productoModal, setProductoModal, fetchAllProducts } =
        useStore();
    const [open, setOpen] = useState(false);
    const { cartItems, addToCart, deleteToCart, addItemCart, deletItemCart } =
        useCart();

    const handleOpen = () => setOpen(!open);
    useEffect(() => {
        fetchAllProducts();
    }, []);
    return (
        <>
            <AppTheme>
                <HomePage
                    products={products}
                    handleOpen={handleOpen}
                    setProductoModal={setProductoModal}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    deleteToCart={deleteToCart}
                    addItemCart={addItemCart}
                    deletItemCart={deletItemCart}
                />
                <TSSModal
                    open={open}
                    handleOpen={handleOpen}
                    productoModal={productoModal}
                />
            </AppTheme>
        </>
    );
};
