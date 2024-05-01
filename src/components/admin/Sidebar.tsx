import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from '@chakra-ui/react';
import { BiBarcode } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import { useEvents, useUserAdmin } from '../../store';

export const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useEvents((state) => [
        state.isOpenSidebar,
        state.setIsOpenSidebar,
    ]);

    const history = useHistory();
    const setLogout = useUserAdmin((state) => state.setLogout);

    const handleLogout = () => {
        setLogout();
        history.push('/admin/login');
    };

    return (
        <Box>
            <Flex
                as="nav"
                position="fixed"
                top={0}
                w="full"
                bg="#1e2a36"
                borderBottom="2px"
                borderColor="gray.700"
                zIndex="50"
                p={3}
                align="center"
                justify="space-between"
            >
                <Flex align="center">
                    <Button
                        aria-label="Open sidebar"
                        display={{ base: 'inline-flex', lg: 'none' }}
                        size="sm"
                        bgColor={'gray.700'}
                        color={'white'}
                        mr={2}
                        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                        _hover={{ bg: 'gray.600' }}
                    >
                        <HamburgerIcon boxSize={6} />
                    </Button>

                    <Flex align="center" mr={6}>
                        <img
                            src="/logo.svg"
                            alt="FakeStore Logo"
                            style={{ height: '32px', marginRight: '6px' }}
                        />
                        <Heading
                            color={'white'}
                            as="span"
                            size="lg"
                            fontWeight="semibold"
                        >
                            FakeStore
                        </Heading>
                    </Flex>
                </Flex>

                <Flex align="center">
                    <Menu>
                        <MenuButton
                            as={Button}
                            variant="link"
                            rounded="full"
                            size="sm"
                            ml={3}
                        >
                            <Avatar
                                size="sm"
                                src="https://bit.ly/dan-abramov"
                            />
                            <ChevronDownIcon ml={2} />
                        </MenuButton>
                        <MenuList
                            bg={'#1e2a36'}
                            border={'1px'}
                            borderColor={'gray.700'}
                        >
                            <MenuItem
                                bg={'#1e2a36'}
                                color={'white'}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'start'}
                            >
                                <Text fontWeight={'bold'}>Diego Millan</Text>
                                <Text fontWeight="medium" fontSize="xs">
                                    diegomillan37@gmail.com
                                </Text>
                            </MenuItem>
                            <MenuItem
                                bg={'#1e2a36'}
                                color={'white'}
                                _hover={{ bg: 'gray.700' }}
                                onClick={() => history.push('/admin/products')}
                            >
                                Products
                            </MenuItem>
                            <MenuItem
                                bg={'#1e2a36'}
                                color={'white'}
                                _hover={{ bg: 'gray.700' }}
                                onClick={handleLogout}
                            >
                                Sign out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {/* Sidebar */}
            <Box
                as="aside"
                position="fixed"
                top={0}
                left={0}
                w={{ base: '44' }}
                h="full"
                pt={20}
                transition="transform 0.2s"
                transform={
                    isOpenSidebar ? 'translateX(0)' : 'translateX(-100%)'
                }
                bg="#1e2a36"
                borderRight="1px"
                borderColor="gray.200"
                zIndex="40"
                overflowY="auto"
            >
                <VStack spacing={2} px={2} align="start">
                    {/* Sidebar links */}
                    <Link to={'/admin/products'}>
                        <Box
                            _hover={{ bg: 'gray.700' }}
                            w="full"
                            textColor={'white'}
                            display={'flex'}
                            alignItems={'center'}
                            py={2}
                            pl={2}
                            pr={8}
                        >
                            <Icon as={BiBarcode} boxSize={8} mr={3} />
                            <Text>Products</Text>
                        </Box>
                    </Link>
                </VStack>
            </Box>
        </Box>
    );
};
