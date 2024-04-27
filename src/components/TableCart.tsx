import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ItemCartMobile, ItemCart } from '.';

type OrientTable = 'landscape' | 'mobile';

export const TableCart = () => {
    const [orientTable, setOrientTable] = useState<OrientTable>('landscape');

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setOrientTable('mobile');
        } else {
            setOrientTable('landscape');
        }
        console.log(orientTable, window.innerWidth);
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
                        <ItemCart />
                    </TableBody>
                </Table>
            ) : (
                <Grid container>
                    <ItemCartMobile />
                </Grid>
            )}
        </>
    );
};
