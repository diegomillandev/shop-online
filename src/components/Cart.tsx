import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Cart = () => {
    return (
        <Link to={'/cart'}>
            <Box
                component={'div'}
                sx={{ display: 'flex', color: 'primary.contrastText' }}
            >
                <Badge badgeContent={0} color="error">
                    <ShoppingCart
                        sx={{ fontSize: 34, color: 'primary.contrastText' }}
                    />
                </Badge>
                <Typography variant="h6" sx={{ alignSelf: 'end' }}>
                    Cart
                </Typography>
            </Box>
        </Link>
    );
};
