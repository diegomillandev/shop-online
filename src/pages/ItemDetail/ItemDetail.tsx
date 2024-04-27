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
import { useParams } from 'react-router-dom';
import { LoadingIndicator, MuiCard } from '../../components';
import { useEffect, useState } from 'react';
import { Product } from '../../types';
import axios from 'axios';

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

const BASE_URL = 'https://fakestoreapi.com/products';

const getElementById = async (id: number): Promise<Product | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el elemento por ID: ${error}`);
        return null;
    }
};

const getProductsByCategory = async (
    category: string
): Promise<Product[] | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener productos por categoría: ${error}`);
        return null;
    }
};

export const ItemDetail = () => {
    const { itemId, percentage } = useParams<Params>();

    const [productDetail, setProductDetail] =
        useState<Product>(productIntialState);
    const [products, setProducts] = useState<Product[]>([]);

    const withImage = (): string => {
        return `${window.innerWidth < 600 ? 160 : 320}px`;
    };

    useEffect(() => {
        const fetchProductDetail = async () => {
            const data = await getElementById(+itemId);
            if (data) {
                setProductDetail(data);
            }
        };
        fetchProductDetail();
    }, [itemId]);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            if (productDetail && productDetail.category) {
                const data = await getProductsByCategory(
                    productDetail.category
                );
                if (data) {
                    setProducts(data);
                }
            }
        };
        fetchProductsByCategory();
    }, [productDetail]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setProductDetail(productIntialState);
        setProducts([]);
    }, [itemId]);

    const filterProducts = products.filter(
        (product) => product.id !== productDetail.id
    );
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
                                                color={'primary.light'}
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
                                    sx={{
                                        width: { xs: '100%', md: '70%' },
                                    }}
                                >
                                    Add to Cart
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
