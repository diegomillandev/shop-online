import { AccountCircle } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const AccountIconNavbar = () => {
    return (
        <Link to={''}>
            <Box component={'div'}>
                <AccountCircle
                    sx={{ fontSize: 34, color: 'primary.contrastText' }}
                />
            </Box>
        </Link>
    );
};
