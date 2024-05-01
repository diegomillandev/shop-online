import {
    Box,
    Button,
    Card,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { loginAdmin } from '../../../services/user.service';
import { useUserAdmin } from '../../../store';
import { UserAdmin } from '../../../types';

export const Login = () => {
    const setTokenUserAdmin = useUserAdmin((state) => state.setTokenUserAdmin);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserAdmin>();
    const history = useHistory();

    const onSubmit = async (data: UserAdmin) => {
        try {
            const {
                data: { token },
            } = await loginAdmin.login(data.username, data.password);
            if (token) {
                setTokenUserAdmin(token);
                history.push('/admin/products');
            }
        } catch (error) {}
    };

    return (
        <Box height={'100vh'} bgColor={'#dbdbdb'} pt={20}>
            <Container bgColor={''}>
                <Heading textAlign={'center'} mb={6}>
                    Sing In
                </Heading>
                <Card padding={4} maxW="sm" mx={'auto'}>
                    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={6} border={'gray'}>
                            <FormLabel color={'#333'}>User Name</FormLabel>
                            <Input
                                id="username"
                                type="text"
                                placeholder="@millandev"
                                {...register('username', {
                                    required: 'This is required',
                                })}
                                value={'mor_2314'}
                            />
                            {errors.username && (
                                <FormHelperText
                                    color={'#ff0000'}
                                    fontSize={'sm'}
                                >
                                    {errors.username.message?.toString()}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl border={'gray'}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="********"
                                {...register('password', {
                                    required: 'This is required',
                                })}
                                value={'83r5^_'}
                            />
                            {errors.password && (
                                <FormHelperText
                                    color={'#ff0000'}
                                    fontSize={'sm'}
                                >
                                    {errors.password.message?.toString()}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Button
                            colorScheme="blue"
                            variant="solid"
                            mt={6}
                            width={'100%'}
                            type="submit"
                        >
                            Sing In
                        </Button>
                    </form>
                </Card>
            </Container>
        </Box>
    );
};
