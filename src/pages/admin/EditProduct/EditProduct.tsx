import { Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
    FormInputs,
    LoadingIndicatorChakraUi,
} from '../../../components/admin';
import { FormProduct, Product } from '../../../types';

interface Params {
    id: string;
}

export const EditProduct = () => {
    const URL_BASE: string = `https://api-shop-production-d3e8.up.railway.app/api`;
    const { id } = useParams<Params>();
    const [product, setProduct] = useState<Product | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormProduct>({ defaultValues: product as FormProduct });

    const getProduct = async (id: string) => {
        const response = await axios.get(`${URL_BASE}/products/${id}`);
        setProduct(response.data);
    };

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id]);

    const onSubmit = (data: FormProduct) => {
        console.log(data);
    };
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Text
                color={'white'}
                textAlign={'center'}
                fontSize="4xl"
                fontWeight={'bold'}
                mb={8}
            >
                Edit Product
            </Text>
            {product ? (
                <Box w={'450px'} bg={'white'} p={8} borderRadius={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormInputs
                            register={register}
                            errors={errors}
                            product={product}
                        />
                        <Button
                            mt={4}
                            colorScheme="blue"
                            width={'full'}
                            type="submit"
                        >
                            Update Product
                        </Button>
                    </form>
                </Box>
            ) : (
                <LoadingIndicatorChakraUi />
            )}
        </Box>
    );
};
