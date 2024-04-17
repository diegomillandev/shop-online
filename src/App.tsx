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
    const { cartItems, setCartItems } = useCart();

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
                    setCartItems={setCartItems}
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
