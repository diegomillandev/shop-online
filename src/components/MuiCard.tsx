import { AddShoppingCart, Visibility } from '@mui/icons-material';
import {
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
import { ProductModalType, ProductType } from '../types/Products';
import { cutString, procentajeRamdom } from '../helpers';
import { useMemo, useState } from 'react';

export const MuiCard = ({
    product,
    handleOpen,
    setProductoModal,
    addToCart,
}: {
    product: ProductType;
    handleOpen: () => void;
    setProductoModal: React.Dispatch<React.SetStateAction<ProductModalType>>;
    addToCart: (product: ProductType) => void;
}) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    const percentage = useMemo(() => procentajeRamdom(), []);
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
                            fontSize={22}
                            marginTop={2}
                            fontWeight={'medium'}
                            textAlign={'center'}
                        >
                            {product.title}
                        </Typography>
                        <Box marginTop={2} marginLeft={1}>
                            <Typography
                                variant="body2"
                                component="div"
                                fontSize={14}
                                fontWeight={'light'}
                            >
                                {cutString(
                                    product.description,
                                    120,
                                    product.title
                                )}
                            </Typography>
                        </Box>
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
                                        -{`${percentage}`}%
                                    </Typography>{' '}
                                    ${product.price}
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
                                            product.price * (percentage / 100) +
                                            product.price
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
                                    onClick={() => {
                                        addToCart(product);
                                    }}
                                >
                                    <AddShoppingCart
                                        sx={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
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
                    sx={{
                        width: 100,
                        height: 50,
                        position: 'absolute',
                        top: '20%',
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
                        ':hover': {
                            bgcolor: '#2f8a2f',
                            cursor: 'pointer',
                        },
                    }}
                    onClick={() => {
                        setProductoModal({
                            ...product,
                            procentaje: percentage,
                        });
                        handleOpen();
                    }}
                >
                    <Visibility
                        sx={{
                            width: 30,
                            height: 30,
                            color: 'white',
                        }}
                    />
                    <Typography>View</Typography>
                </Box>
            </Card>
        </Grid>
    );
};
