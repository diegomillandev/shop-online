import { useEffect, useState } from 'react';
import { useStore } from './hooks/useStore';
import { HomePage } from './pages';
import { AppTheme } from './theme';
import { TSSModal } from './components';

export const App = () => {
    const { products, productoModal, setProductoModal, fetchAllProducts } =
        useStore();
    const [open, setOpen] = useState(false);
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
