import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { TableCart } from '../../components';
import { Delete, Replay } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const Cart = () => {
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
                    bgcolor={'secondary.light'}
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
                    <Box display={'flex'} alignItems={'center'}>
                        <Delete color="error" fontSize="small" />
                        <Typography
                            component={'div'}
                            fontWeight={'semibold'}
                            color={'error'}
                            mt={0.5}
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
                        <Typography>$35.00</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography
                            variant="body1"
                            fontWeight={'bold'}
                            color={'primary.dark'}
                        >
                            Shipping
                        </Typography>
                        <Typography>$5.00</Typography>
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
                        <Typography>$40.00</Typography>
                    </Box>
                    <Button variant="contained" fullWidth color="secondary">
                        Contained
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};
