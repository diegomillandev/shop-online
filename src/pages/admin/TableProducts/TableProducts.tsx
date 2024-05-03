import {
    Box,
    Checkbox,
    Link,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useProducts } from '../../../store';

export const TableProducts = () => {
    const [products, getProducts] = useProducts((state) => [
        state.products,
        state.getProducts,
    ]);

    useEffect(() => {
        getProducts(20);
    }, []);
    console.log(products);
    return (
        <Box
            overflowX="auto"
            shadow="md"
            borderRadius="lg"
            bg={'gray.800'}
            border={'1px'}
            borderColor={'gray.800'}
        >
            <Table variant="simple">
                <Thead
                    bgColor="gray.900"
                    textColor="gray.100"
                    border={'2px'}
                    borderColor={'gray.800'}
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
                <Tbody border={'2px'} borderColor={'gray.800'} color={'white'}>
                    {products.map((product) => (
                        <Tr key={product.id}>
                            <Td>
                                <Checkbox />
                            </Td>
                            <Td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Td>
                            <Td>{product.title}</Td>
                            <Td>{product.category}</Td>
                            <Td>{product.description}</Td>
                            <Td>{product.price}</Td>
                            <Td>
                                <Link mr={2} color="blue.500">
                                    Edit
                                </Link>
                                <Link color="red.500">Remove</Link>
                            </Td>
                        </Tr>
                    ))}

                    {/* Más filas de productos aquí */}
                </Tbody>
            </Table>
        </Box>
    );
};

{
    /* <Tr color={'white'}>
                        <Td>
                            <Checkbox />
                        </Td>
                        <Td fontWeight="bold">Apple MacBook Pro 17"</Td>
                        <Td>Silver</Td>
                        <Td>Silver</Td>
                        <Td>Laptop</Td>
                        <Td>Yes</Td>
                        <Td>
                            <Link mr={2} color="blue.500">
                                Edit
                            </Link>
                            <Link color="red.500">Remove</Link>
                        </Td>
                    </Tr> */
}
