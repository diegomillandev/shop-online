import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ItemCart, ItemCartMobile } from '.';
import { useCart } from '../store/cart';

type OrientTable = 'landscape' | 'mobile';

export const TableCart = () => {
    const [cart] = useCart((state) => [state.cart]);
    const [orientTable, setOrientTable] = useState<OrientTable>('landscape');

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setOrientTable('mobile');
        } else {
            setOrientTable('landscape');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [orientTable]);

    useEffect(() => {
        handleResize();
    }, []);

    return (
        <>
            {orientTable === 'landscape' ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (
                            <ItemCart key={item.id} item={item} />
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Grid container>
                    {cart.map((item) => (
                        <ItemCartMobile key={item.id} item={item} />
                    ))}
                </Grid>
            )}
        </>
    );
};
