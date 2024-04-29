import { AccountCircle } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const AccountIconNavbar = () => {
    return (
        <Link>
            <Box mt={0.5} component={'div'} color={'primary.contrastText'}>
                <AccountCircle fontSize="large" />
            </Box>
        </Link>
    );
};
