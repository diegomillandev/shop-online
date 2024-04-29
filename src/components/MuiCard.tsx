import { AddShoppingCart, ShoppingCart } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useEvents, useProducts } from '../store';
import { useCart } from '../store/cart';
import { Product } from '../types';
export const MuiCard = ({ product }: { product: Product }) => {
    const cart = useCart((state) => state.cart);
    const [hovered, setHovered] = useState<Boolean>(false);
    const [openModal, setOpenModal] = useEvents((state) => [
        state.openModal,
        state.setOpenModal,
    ]);
    const setProductModal = useProducts((state) => state.setProductModal);

    const handleHover = (show: Boolean) => {
        setHovered(show);
    };

    const randomDiscount = useMemo(
        () => Math.floor(Math.random() * 20) + 5,
        [],
    );
    const handleOpen = () => {
        setOpenModal(!openModal);
        setProductModal({ ...product, percentage: randomDiscount });
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                variant="outlined"
                sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    ':hover': {
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                    },
                    position: 'relative',
                    cursor: 'pointer',
                }}
                onClick={handleOpen}
            >
                {cart.find((item) => item.id === product.id)?.quantity && (
                    <>
                        <Box
                            position={'absolute'}
                            width={'100%'}
                            height={'100%'}
                            border={2}
                            borderColor={'success.main'}
                            zIndex={100}
                        ></Box>
                        <Box
                            position={'absolute'}
                            width={'30%'}
                            height={'10%'}
                            color={'success.main'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgcolor={'secondary.contrastText'}
                            top={30}
                            borderRadius={1}
                            zIndex={99}
                        >
                            <Typography
                                variant="body1"
                                component="div"
                                fontSize={16}
                                fontWeight={'bold'}
                                color={'success.main'}
                                textAlign={'center'}
                                borderRadius={1}
                                padding={0.5}
                            >
                                {`${
                                    cart.find((item) => item.id === product.id)
                                        ?.quantity
                                } in`}
                            </Typography>
                            <ShoppingCart fontSize="small" />
                        </Box>
                    </>
                )}
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <CardMedia
                            sx={{
                                height: 200,
                                width: 220,
                                margin: 'auto',
                                objectFit: 'contain',
                                transition: 'all 0.3s ease-in-out',
                                filter: hovered ? 'blur(2px)' : 'none',
                            }}
                            image={product.image}
                            component={'img'}
                        ></CardMedia>
                        <Typography
                            variant="h5"
                            component="div"
                            fontSize={18}
                            marginTop={2}
                            fontWeight={'medium'}
                            textAlign={'center'}
                            noWrap={false}
                        >
                            {`${product.title.slice(0, 20)}...`}
                        </Typography>
                    </Box>
                    <Box marginTop={1} display={'flex'} alignItems={'center'}>
                        <Box flexGrow={1}>
                            <Box
                                display="flex"
                                gap={0.5}
                                alignItems="center"
                                justifyContent={'center'}
                            >
                                <Rating
                                    size="small"
                                    name="read-only"
                                    value={product.rating.rate}
                                    readOnly
                                />
                                <Typography
                                    variant="body2"
                                    component="div"
                                    fontSize={12}
                                    fontWeight={'medium'}
                                    color={'#9e9e9e'}
                                >
                                    {`(${product.rating.count}reviews)`}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection={'column'}
                                alignItems="center"
                                marginTop={1}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontSize={18}
                                    fontWeight={'bold'}
                                >
                                    <Typography
                                        component="span"
                                        color={'#e00d0d'}
                                        fontWeight={'medium'}
                                    >
                                        -{`${randomDiscount}`}%
                                    </Typography>{' '}
                                    ${product.price.toFixed(2)}
                                </Typography>
                                <Typography
                                    component="span"
                                    fontSize={13}
                                    color={'#585858'}
                                    marginTop={-0.5}
                                >
                                    List Price:{' '}
                                    <Typography
                                        component="span"
                                        sx={{
                                            textDecoration: 'line-through',
                                        }}
                                        fontSize={14}
                                    >
                                        {`$${(
                                            product.price +
                                            product.price *
                                                (randomDiscount / 100)
                                        ).toFixed(2)}`}
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
                <Box
                    onClick={handleOpen}
                    sx={{
                        width: 120,
                        height: 50,
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -80%)',
                        display: hovered ? 'flex' : 'none',
                        justifyContent: 'center',
                        gap: 0.5,
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        alignItems: 'center',
                        bgcolor: '#44a036',
                        paddingX: 1,
                        ':hover': {
                            bgcolor: '#2f8a2f',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <AddShoppingCart
                        sx={{
                            width: 30,
                            height: 30,
                            color: 'white',
                        }}
                    />
                    <Typography>Add Cart</Typography>
                </Box>
            </Card>
        </Grid>
    );
};
