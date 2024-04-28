import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../store/cart';

export const Cart = () => {
    const cart = useCart((state) => state.cart);

    return (
        <Link to={'/cart'}>
            <Box
                component={'div'}
                color={'primary.contrastText'}
                display={'flex'}
            >
                <Badge badgeContent={cart.length} color="error">
                    <ShoppingCart fontSize="large" />
                </Badge>
                <Typography variant="h6" alignSelf={'end'}>
                    Cart
                </Typography>
            </Box>
        </Link>
    );
};
