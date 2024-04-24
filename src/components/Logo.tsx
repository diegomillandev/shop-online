import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to={'/'}>
            <Box sx={{ flex: { xs: 1, md: 0 }, display: 'flex' }}>
                <Box
                    component={'img'}
                    src="/logo.png"
                    sx={{
                        width: { xs: 110, md: 110 },
                    }}
                ></Box>
            </Box>
        </Link>
    );
};
