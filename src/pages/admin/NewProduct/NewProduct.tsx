import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputs } from '../../../components/admin';
import { FormProduct, Product } from '../../../types';

export const NewProduct = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormProduct>({ defaultValues: product as FormProduct });

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
                New Product
            </Text>
            <Box w={'450px'} bg={'white'} p={8} borderRadius={8}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInputs register={register} errors={errors} />
                    <Button
                        mt={4}
                        colorScheme="blue"
                        width={'full'}
                        type="submit"
                    >
                        Add Product
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
