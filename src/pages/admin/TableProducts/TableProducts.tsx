import {
    Box,
    Button,
    Checkbox,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingIndicatorChakraUi } from '../../../components/admin';
import { useProducts } from '../../../store';

export const TableProducts = () => {
    const [products, getProducts] = useProducts((state) => [
        state.products,
        state.getProducts,
    ]);

    useEffect(() => {
        getProducts(20);
    }, []);

    return (
        <>
            <Box
                overflowX="auto"
                shadow="md"
                bg={'gray.400'}
                border={'1px'}
                borderColor={'gray.800'}
            >
                <Box my={4} display={'flex'} justifyContent={'end'} pr={6}>
                    <Link to={'/admin/product/new-product'}>
                        <Button colorScheme="blue">Add Product</Button>
                    </Link>
                </Box>
                {products.length > 0 && (
                    <Table variant="simple">
                        <Thead
                            bgColor="gray.300"
                            textColor="gray.100"
                            border={'2px'}
                            borderColor={'gray.400'}
                        >
                            <Tr>
                                <Th></Th>
                                <Th>Image</Th>
                                <Th>Title</Th>
                                <Th>category</Th>
                                <Th>description</Th>
                                <Th>Price</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody
                            border={'2px'}
                            borderColor={'gray.400'}
                            color={'black'}
                        >
                            {products.map((product) => (
                                <Tr key={product.id}>
                                    <Td>
                                        <Checkbox />
                                    </Td>
                                    <Td>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        />
                                    </Td>
                                    <Td>{product.title}</Td>
                                    <Td>{product.category}</Td>
                                    <Td>{product.description}</Td>
                                    <Td>{product.price}</Td>
                                    <Td>
                                        <Link
                                            to={`/admin/product/edit-product/${product.id}`}
                                        >
                                            <Text
                                                mr={2}
                                                fontSize="sm"
                                                color={'blue'}
                                                fontWeight={'bold'}
                                            >
                                                Edit
                                            </Text>
                                        </Link>
                                        <Link to="#">
                                            <Text
                                                variant="button"
                                                fontSize="sm"
                                                color={'red'}
                                                fontWeight={'bold'}
                                            >
                                                Delete
                                            </Text>
                                        </Link>
                                    </Td>
                                </Tr>
                            ))}

                            {/* Más filas de productos aquí */}
                        </Tbody>
                    </Table>
                )}
            </Box>
            {products.length === 0 && <LoadingIndicatorChakraUi />}
        </>
    );
};
