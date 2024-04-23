import { Box } from '@mui/material';

export const Logo = () => {
    return (
        <Box sx={{ flex: { xs: 1, md: 0 }, display: 'flex' }}>
            <Box
                component={'img'}
                src="/logo.png"
                sx={{
                    width: { xs: 110, md: 110 },
                }}
            ></Box>
        </Box>
    );
};
