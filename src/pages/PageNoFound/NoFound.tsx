import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NoFound = () => {
    useEffect(() => {
        document.title = '404 - Page not found';
    }, []);
    return (
        <>
            <Box
                display={'flex'}
                height={'70vh'}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Typography variant={'h1'} fontWeight={'bold'}>
                    404
                </Typography>
                <Typography variant={'h3'}>Page not found</Typography>
                <Link to={'/'}>
                    <Typography
                        variant={'h6'}
                        color={'success.main'}
                        sx={{
                            ':hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        Go to Home
                    </Typography>
                </Link>
            </Box>
        </>
    );
};
