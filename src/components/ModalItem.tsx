import { Add, Close, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { useEvents, useProducts } from '../store';
import { ProductModal } from '../types';
import { Link } from 'react-router-dom';

export const ModalItem = () => {
    const [openModal, setOpenModal] = useEvents((state) => [
        state.openModal,
        state.setOpenModal,
    ]);
    const [productModal, setProductModal] = useProducts((state) => [
        state.productModal,
        state.setProductModal,
    ]);

    const handleOpen = () => {
        setOpenModal(!openModal);
        setProductModal({} as ProductModal);
    };

    return (
        <Modal open={openModal} onClose={handleOpen}>
            <Box
                position="absolute"
                minHeight="100vh"
                width="100%"
                bgcolor="rgba(0, 0, 0, 0.6)"
                zIndex={99}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={4}
            >
                <Box
                    bgcolor="white"
                    width={{ xs: '100%', sm: '80%', md: '60%', lg: '45%' }}
                    p={4}
                    borderRadius={2}
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
                    alignItems={{ xs: 'center' }}
                    gap={3}
                    position="relative"
                >
                    <IconButton
                        onClick={handleOpen}
                        style={{ position: 'absolute', top: 10, right: 10 }}
                    >
                        <Close />
                    </IconButton>
                    <Box sx={{ flex: 1, display: 'flex' }}>
                        <img
                            src={productModal.image}
                            alt="image product"
                            style={{
                                width: '100%',
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
                                bgcolor: 'secondary.main',
                                paddingX: 1.5,
                                paddingY: 0.5,
                                borderRadius: 1,
                                cursor: 'pointer',
                                display: 'inline',
                                '&:hover': {
                                    bgcolor: '#ffab5c',
                                },
                                width: 'fit-content',
                            }}
                            component={'span'}
                        >
                            <Link to={`/item/${productModal.id}`}>
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
                                    display="flex"
                                    alignItems={'center'}
                                    gap={1}
                                    mt={2}
                                >
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                    >
                                        <Remove />
                                    </IconButton>
                                    <Typography
                                        component="span"
                                        fontWeight="bold"
                                        fontSize={18}
                                    >
                                        1
                                    </Typography>
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                    >
                                        <Add />
                                    </IconButton>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: 10 }}
                                >
                                    Add to Cart
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
