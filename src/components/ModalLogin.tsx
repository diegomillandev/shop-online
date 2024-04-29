import { Close } from '@mui/icons-material';
import {
    Box,
    Button,
    FormControl,
    Grid,
    Link,
    Modal,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { useEvents } from '../store';

export const ModalLogin = () => {
    const [singUp, setSignUp] = useState(false);
    const [openModalLogin, setOpenModalLogin] = useEvents((state) => [
        state.openModalLogin,
        state.setOpenModalLogin,
    ]);

    const handleOpen = () => {
        setOpenModalLogin(!openModalLogin);
    };

    const handleFormSignInOrSignUp = () => {
        setSignUp(!singUp);
    };

    return (
        <>
            <Modal open={openModalLogin} onClose={handleOpen}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100vh'}
                    mx={{ xs: 2, sm: 0 }}
                >
                    <Box
                        component={'form'}
                        bgcolor={'white'}
                        p={4}
                        borderRadius={1}
                        autoComplete="off"
                        maxWidth={400}
                        position={'relative'}
                    >
                        <Box
                            position={'absolute'}
                            top={2}
                            right={2}
                            p={1}
                            sx={{ cursor: 'pointer' }}
                            onClick={handleOpen}
                        >
                            <Close />
                        </Box>
                        {singUp ? (
                            <Box id="singUp">
                                <Typography variant={'h5'} mb={2}>
                                    Sign Up
                                </Typography>
                                <Grid container rowGap={2} mb={3}>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label={'Email'}
                                                variant={'outlined'}
                                                type={'email'}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label={'Password'}
                                                variant={'outlined'}
                                                type={'password'}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label={'Confirm Password'}
                                                variant={'outlined'}
                                                type={'password'}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                {/* button */}
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    color={'primary'}
                                    onClick={() => {}}
                                >
                                    <Typography>Sign Up</Typography>
                                </Button>
                            </Box>
                        ) : (
                            <Box id="signIn">
                                <Typography variant={'h5'} mb={2}>
                                    Sign In
                                </Typography>
                                <Grid container rowGap={2} mb={3}>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label={'Email'}
                                                variant={'outlined'}
                                                type={'email'}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label={'Password'}
                                                variant={'outlined'}
                                                type={'password'}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                {/* button */}
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    color={'primary'}
                                    onClick={() => {}}
                                >
                                    <Typography>Sign In</Typography>
                                </Button>
                            </Box>
                        )}

                        <Box display={'flex'} alignItems={'center'} mt={2}>
                            {singUp ? (
                                <>
                                    <Typography>
                                        Already have an account?
                                    </Typography>
                                    <Link
                                        ml={1}
                                        sx={{ cursor: 'pointer' }}
                                        onClick={handleFormSignInOrSignUp}
                                    >
                                        <Typography
                                            textTransform={'capitalize'}
                                        >
                                            Sign In
                                        </Typography>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Typography>
                                        Don't have an account?
                                    </Typography>
                                    <Link
                                        ml={1}
                                        sx={{ cursor: 'pointer' }}
                                        onClick={handleFormSignInOrSignUp}
                                    >
                                        <Typography
                                            textTransform={'capitalize'}
                                        >
                                            Sign Up
                                        </Typography>
                                    </Link>
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
