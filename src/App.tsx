import { useEffect } from 'react';
import { useStore } from './hooks/useStore';
import { HomePage } from './pages';
import { AppTheme } from './theme';

export const App = () => {
    const { products, fetchAllProducts } = useStore();
    useEffect(() => {
        fetchAllProducts();
    }, []);
    return (
        <>
            <AppTheme>
                <HomePage products={products} />
            </AppTheme>
        </>
    );
};
