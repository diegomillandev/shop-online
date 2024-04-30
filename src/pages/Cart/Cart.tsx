import { Delete, Replay } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TableCart } from '../../components';
import { useCart } from '../../store/cart';

export const Cart = () => {
    const [cart, clearCart] = useCart((state) => [state.cart, state.clearCart]);
    const history = useHistory();

    const subTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );
    const totalCart = subTotal;

    useEffect(() => {
        if (cart.length === 0) {
            setTimeout(() => {
                history.push('/store');
            }, 500);
        }
    }, [cart]);

    useEffect(() => {
        document.title = 'FakeStore - Cart';
    }, []);
    return (
        <Grid container gap={1}>
            <Grid
                item
                xs={12}
                lg={8}
                border={1}
                borderColor={'primary.light'}
                p={2}
            >
                <Typography
                    variant="h5"
                    textAlign={'center'}
                    fontWeight={'semibold'}
                    color={'secondary.dark'}
                >
                    Shopping Cart
                </Typography>
                <Typography
                    component={'p'}
                    my={2}
                    bgcolor={'secondary.contrastText'}
                    py={1}
                    color={'error.main'}
                    fontSize={13}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Check your order carefully. Check quantities and prices
                    before finalising your purchase.
                </Typography>
                <TableCart />
                <Box
                    mt={2}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Delete color="error" fontSize="small" />
                        <Typography
                            component={'div'}
                            fontWeight={'semibold'}
                            color={'error'}
                            mt={0.5}
                            onClick={() => clearCart()}
                        >
                            Clear Cart
                        </Typography>
                    </Box>
                    <Link to="/">
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            bgcolor={'secondary.main'}
                            p={1}
                            borderRadius={1}
                            color={'primary.dark'}
                            fontWeight={'semibold'}
                        >
                            <Replay color="primary" fontSize="small" />
                            Continue Shopping
                        </Box>
                    </Link>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                lg={3}
                border={0.5}
                borderColor="primary.light"
                height={220}
                mt={{ xs: 2, lg: 0 }}
            >
                <Typography
                    variant="h6"
                    textAlign={'center'}
                    fontWeight={'semibold'}
                    color={'primary.dark'}
                    py={1.5}
                >
                    Cart Summary
                </Typography>
                <Divider />

                <Box p={2}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography
                            variant="body1"
                            fontWeight={'bold'}
                            color={'primary.dark'}
                        >
                            Subtotal
                        </Typography>
                        <Typography>{`$${subTotal}`}</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography
                            variant="body1"
                            fontWeight={'bold'}
                            color={'primary.dark'}
                        >
                            Shipping
                        </Typography>
                        <Typography color={'success.main'}>free</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        mb={3}
                    >
                        <Typography
                            variant="body1"
                            fontWeight={'bold'}
                            color={'primary.dark'}
                        >
                            Total
                        </Typography>
                        <Typography>{`$${totalCart}`}</Typography>
                    </Box>
                    <Button variant="contained" fullWidth color="primary">
                        Finish Order
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};
