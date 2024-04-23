import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Cart = () => {
    return (
        <Link to={'/cart'}>
            <IconButton sx={{}}>
                <Badge badgeContent={0} color="error">
                    <ShoppingCart sx={{ fontSize: 34, color: 'white' }} />
                </Badge>
                <Typography
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        color: 'white',
                        fontWeight: 'bold',
                        justifySelf: 'end',
                    }}
                >
                    Cart
                </Typography>
            </IconButton>
        </Link>
    );
};
