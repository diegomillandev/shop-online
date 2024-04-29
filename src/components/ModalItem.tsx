import { Add, Close, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEvents, useProducts } from '../store';
import { useCart } from '../store/cart';
import { CartItem, ProductModal } from '../types';

export const ModalItem = () => {
    const [cart, addToCart] = useCart((state) => [state.cart, state.addToCart]);
    const [productModal, setProductModal] = useProducts((state) => [
        state.productModal,
        state.setProductModal,
    ]);
    const [quantity, setQuantity] = useState(0);
    const [openModal, setOpenModal] = useEvents((state) => [
        state.openModal,
        state.setOpenModal,
    ]);

    useEffect(() => {
        setQuantity(
            cart.find((item) => item.id === productModal.id)?.quantity || 1,
        );
    }, [cart, productModal.id]);

    const handleOpen = () => {
        setOpenModal(!openModal);
        setProductModal({} as ProductModal);
        setQuantity(1);
    };

    const withImage = (): string => {
        return (window.innerWidth < 600 ? 160 : 220) + 'px';
    };

    const handleAddToCart = () => {
        const newItem: CartItem = {
            id: productModal.id,
            title: productModal.title,
            price: productModal.price,
            image: productModal.image,
            quantity: quantity,
        };
        addToCart(newItem);
        handleOpen();
    };

    return (
        <Modal open={openModal} onClose={handleOpen}>
            <Box
                position="absolute"
                minHeight="100vh"
                width="100%"
                zIndex={99}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={4}
            >
                <Box
                    bgcolor="white"
                    width={{
                        xs: '100%',
                        sm: '80%',
                        md: '60%',
                        lg: '45%',
                        xl: '35%',
                    }}
                    p={4}
                    borderRadius={2}
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
                    alignItems={{ xs: 'center' }}
                    gap={3}
                    position="relative"
                    paddingX={5}
                >
                    <IconButton
                        onClick={handleOpen}
                        style={{ position: 'absolute', top: 10, right: 10 }}
                    >
                        <Close />
                    </IconButton>
                    <Box sx={{ flex: 1, display: 'flex' }}>
                        <Box
                            component={'img'}
                            src={productModal.image}
                            alt="image product"
                            width={withImage()}
                            style={{
                                objectFit: 'contain',
                                margin: 'auto',
                            }}
                        />
                    </Box>

                    <Box
                        maxWidth={250}
                        display="flex"
                        alignItems={{ xs: 'center', sm: 'flex-start' }}
                        flexDirection="column"
                    >
                        <Typography
                            fontWeight="bold"
                            mb={2}
                            style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                        >
                            {productModal.title}
                        </Typography>
                        <Box
                            sx={{
                                bgcolor: 'secondary.light',
                                paddingX: 1.5,
                                paddingY: 0.5,
                                borderRadius: 1,
                                cursor: 'pointer',
                                display: 'inline',
                                '&:hover': {
                                    bgcolor: 'secondary.main',
                                },
                                width: 'fit-content',
                            }}
                            component={'span'}
                        >
                            <Link
                                to={`/item/${productModal.id}/${productModal.percentage}`}
                                onClick={handleOpen}
                            >
                                <Typography>View product details</Typography>
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="center" my={2}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontSize={18}
                                    fontWeight="bold"
                                >
                                    <Typography
                                        component="span"
                                        color="error"
                                        fontWeight="medium"
                                    >
                                        -{`${productModal.percentage}`}%
                                    </Typography>{' '}
                                    ${productModal.price}
                                </Typography>

                                <Typography
                                    component="span"
                                    fontSize={13}
                                    color="textSecondary"
                                    mt={-0.5}
                                >
                                    List Price:{' '}
                                    <Typography
                                        component="span"
                                        style={{
                                            textDecoration: 'line-through',
                                        }}
                                        fontSize={14}
                                    >
                                        {`${(
                                            productModal.price +
                                            productModal.price *
                                                (productModal.percentage / 100)
                                        ).toFixed(2)}`}
                                    </Typography>
                                </Typography>
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                >
                                    {cart.find(
                                        (item) => item.id === productModal.id,
                                    ) && (
                                        <Box
                                            component="span"
                                            fontSize={10}
                                            bgcolor={'secondary.contrastText'}
                                            mt={2}
                                            py={0.5}
                                            px={1.5}
                                        >
                                            <Typography
                                                fontSize={13}
                                                color={'primary.dark'}
                                            >
                                                You have
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                    color={'error'}
                                                    fontSize={14}
                                                >{` ${
                                                    cart.find(
                                                        (item) =>
                                                            item.id ===
                                                            productModal.id,
                                                    )?.quantity
                                                } `}</Typography>
                                                items in your cart
                                            </Typography>
                                        </Box>
                                    )}
                                    <Box
                                        alignSelf={'start'}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'center'}
                                    >
                                        <Box
                                            display="flex"
                                            alignItems={'center'}
                                            gap={1}
                                            mt={2}
                                        >
                                            <IconButton
                                                aria-label="delete"
                                                color="primary"
                                                onClick={() =>
                                                    setQuantity(quantity - 1)
                                                }
                                                disabled={quantity === 1}
                                            >
                                                <Remove />
                                            </IconButton>
                                            <Typography
                                                component="span"
                                                fontWeight="bold"
                                                fontSize={18}
                                            >
                                                {quantity}
                                            </Typography>
                                            <IconButton
                                                aria-label="delete"
                                                color="primary"
                                                onClick={() =>
                                                    setQuantity(quantity + 1)
                                                }
                                                disabled={quantity === 10}
                                            >
                                                <Add />
                                            </IconButton>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleAddToCart}
                                        >
                                            {cart.find(
                                                (item) =>
                                                    item.id === productModal.id,
                                            )?.quantity
                                                ? 'Update Cart'
                                                : 'Add to Cart'}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
