import { Add, Remove } from '@mui/icons-material';
import {
    Box,
    Button,
    CardContent,
    Divider,
    Grid,
    IconButton,
    Rating,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingIndicator, MuiCard } from '../../components';
import { getProductById, getProductsByCategory } from '../../services';
import { useCart } from '../../store/cart';
import { CartItem, Product } from '../../types';

type Params = {
    itemId: string;
    percentage: string;
};
const productIntialState = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
        rate: 0,
        count: 0,
    },
};

export const ItemDetail = () => {
    const { itemId, percentage } = useParams<Params>();
    const [cart, addToCart] = useCart((state) => [state.cart, state.addToCart]);
    const [quantity, setQuantity] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);

    const [productDetail, setProductDetail] =
        useState<Product>(productIntialState);

    const withImage = (): string => {
        return `${window.innerWidth < 600 ? 160 : 320}px`;
    };

    const fetchProductDetail = async () => {
        const { data } = await getProductById(+itemId);
        setProductDetail(data);
    };

    const getProductsCategory = async (category: string) => {
        const { data } = await getProductsByCategory(category);
        if (data.length > 0) setProducts(products.concat(data));
    };

    useEffect(() => {
        try {
            fetchProductDetail();
        } catch (error) {
            console.error(`Error al obtener el producto por ID: ${error}`);
        }
    }, [itemId]);

    useEffect(() => {
        try {
            getProductsCategory(productDetail.category);
        } catch (error) {
            console.error(
                `Error al obtener los productos por categoria: ${error}`,
            );
        }
    }, [productDetail]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setProductDetail(productIntialState);
        setProducts([]);
    }, [itemId]);

    useEffect(() => {
        setQuantity(cart.find((item) => item.id === +itemId)?.quantity || 1);
    }, [cart]);

    const filterProducts = products.filter(
        (product) => product.id !== productDetail.id,
    );

    const handleAddToCart = () => {
        const newItem: CartItem = {
            id: productDetail.id,
            title: productDetail.title,
            price: productDetail.price,
            image: productDetail.image,
            quantity: quantity,
        };
        addToCart(newItem);
    };

    useEffect(() => {
        document.title = `${productDetail.title} - FakeStore`;
    }, [productDetail]);

    return (
        <>
            {productDetail.id !== 0 ? (
                <Box component={'div'} marginTop={18} marginBottom={12}>
                    <Grid container spacing={{ xs: 3 }}>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Box
                                component={'img'}
                                src={productDetail?.image}
                                alt="image product"
                                width={withImage()}
                                m={'auto'}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box component={'div'}>
                                <Typography variant="h5" fontWeight={'bold'}>
                                    {productDetail?.title}
                                </Typography>
                                <Typography variant="body1" mt={2}>
                                    {productDetail?.description}
                                </Typography>
                            </Box>
                            <CardContent>
                                <Box display={'flex'}>
                                    <Box flexGrow={1}>
                                        <Box display="flex" gap={0.5}>
                                            <Rating
                                                size="small"
                                                name="read-only"
                                                value={
                                                    productDetail?.rating.rate
                                                }
                                                readOnly
                                            />
                                            <Typography
                                                variant="body2"
                                                component="div"
                                                fontSize={13}
                                                fontWeight={'medium'}
                                                color={'#9e9e9e'}
                                            >
                                                {`(${productDetail?.rating.count}reviews)`}
                                            </Typography>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection={'column'}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                fontSize={22}
                                                fontWeight={'bold'}
                                            >
                                                <Typography
                                                    component="span"
                                                    color={'error.main'}
                                                    fontWeight={'medium'}
                                                >
                                                    -{`${percentage}`}%
                                                </Typography>{' '}
                                                ${productDetail?.price}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                fontSize={13}
                                                color={'primary.dark'}
                                                marginTop={-0.5}
                                            >
                                                List Price:{' '}
                                                <Box
                                                    component="span"
                                                    fontSize={14}
                                                    sx={{
                                                        textDecoration:
                                                            'line-through',
                                                    }}
                                                >
                                                    {`${(
                                                        productDetail?.price +
                                                        productDetail?.price *
                                                            (+percentage / 100)
                                                    ).toFixed(2)}`}
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>

                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                {cart.find(
                                    (item) => item.id === productDetail.id,
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
                                                        productDetail.id,
                                                )?.quantity
                                            } `}</Typography>
                                            items in your cart
                                        </Typography>
                                    </Box>
                                )}
                                <Box
                                    display="flex"
                                    alignItems={'center'}
                                    gap={1}
                                    mt={2}
                                    mb={4}
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
                                    sx={{
                                        width: { xs: '100%', md: '70%' },
                                    }}
                                    onClick={handleAddToCart}
                                >
                                    {cart.find(
                                        (item) => item.id === productDetail.id,
                                    )?.quantity
                                        ? 'Update Cart'
                                        : 'Add to Cart'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <LoadingIndicator />
            )}

            <Box component={'div'} marginTop={12}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Discover similar items
                </Typography>
                <Divider />
                <Grid
                    container
                    spacing={5}
                    mt={0.5}
                    mb={5}
                    justifyContent={'center'}
                >
                    {products.length !== 0 ? (
                        filterProducts.map((product) => (
                            <MuiCard key={product.id} product={product} />
                        ))
                    ) : (
                        <LoadingIndicator />
                    )}
                </Grid>
            </Box>
        </>
    );
};
