import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Cart = () => {
    return (
        <Link to={'/cart'}>
            <Box
                component={'div'}
                color={'primary.contrastText'}
                display={'flex'}
            >
                <Badge badgeContent={0} color="error">
                    <ShoppingCart fontSize="large" />
                </Badge>
                <Typography variant="h6" alignSelf={'end'}>
                    Cart
                </Typography>
            </Box>
        </Link>
    );
};
