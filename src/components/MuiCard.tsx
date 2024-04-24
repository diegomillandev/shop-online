import { AddShoppingCart, Visibility } from '@mui/icons-material';
import {
    Badge,
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Rating,
    Tooltip,
    Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { Product } from '../types';
import { useEvents, useProducts } from '../store';

export const MuiCard = ({ product }: { product: Product }) => {
    const [hovered, setHovered] = useState(false);
    const [openModal, setOpenModal] = useEvents((state) => [
        state.openModal,
        state.setOpenModal,
    ]);
    const setProductModal = useProducts((state) => state.setProductModal);
    const handleHover = () => {
        setHovered(!hovered);
    };

    const randomDiscount = useMemo(
        () => Math.floor(Math.random() * 20) + 5,
        []
    );
    const handleOpen = () => {
        setOpenModal(!openModal);
        setProductModal({ ...product, percentage: randomDiscount });
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                variant="outlined"
                sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    ':hover': {
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                    },
                    position: 'relative',
                }}
            >
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
                            {`${product.title}`}
                        </Typography>
                    </Box>
                    <Box marginTop={1} display={'flex'} alignItems={'center'}>
                        <Box flexGrow={1}>
                            <Box display="flex" gap={0.5} alignItems="center">
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
                                alignItems="start"
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
                                        sx={{ textDecoration: 'line-through' }}
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
                        <Box
                            display={'flex'}
                            justifyContent={'end'}
                            alignSelf={'end'}
                        >
                            <Tooltip title="Add Cart" placement="top">
                                <IconButton
                                    size="large"
                                    color="inherit"
                                    sx={{ position: 'relative' }}
                                >
                                    <Badge badgeContent={0} color="error">
                                        <AddShoppingCart
                                            sx={{
                                                width: 30,
                                                height: 30,
                                            }}
                                        />
                                    </Badge>
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            bgcolor: '#ca1f1f',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: 15,
                                            height: 15,
                                            fontSize: 10,
                                        }}
                                        display={'none'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        padding={1}
                                        top={2}
                                        right={4}
                                    >
                                        1
                                    </Typography>
                                </IconButton>
                            </Tooltip>
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
