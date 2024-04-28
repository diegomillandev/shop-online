import { Add, DeleteForever, Remove } from '@mui/icons-material';
import {
    Box,
    CardMedia,
    IconButton,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material';
import { CartItem } from '../types';
import { useCart } from '../store/cart';

export const ItemCart = ({ item }: { item: CartItem }) => {
    const [deleteItemCart, subQuantityItem, addQuantityItem] = useCart(
        (state) => [
            state.deleteItemCart,
            state.subQuantityItem,
            state.addQuantityItem,
        ]
    );

    return (
        <TableRow>
            <TableCell variant="head">
                <Box display={'flex'} alignItems={'center'} maxWidth={280}>
                    <CardMedia
                        width={100}
                        height={120}
                        sx={{
                            objectFit: 'contain',
                        }}
                        image={item.image}
                        component={'img'}
                    ></CardMedia>
                    <Typography component={'span'}>
                        {`${item.title.slice(0, 16)}...`}
                    </Typography>
                </Box>
            </TableCell>

            <TableCell align="center">{`$${item.price}`}</TableCell>

            <TableCell>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Box
                        component={'button'}
                        border={'none'}
                        bgcolor={'success.main'}
                        color={'white'}
                        borderRadius={'50%'}
                        height={30}
                        width={30}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        onClick={() => subQuantityItem(item.id)}
                        disabled={item.quantity === 0}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Remove />
                    </Box>
                    <Box component={'span'} mx={1} fontWeight={'bold'}>
                        {item.quantity}
                    </Box>
                    <Box
                        component={'button'}
                        border={'none'}
                        bgcolor={'success.main'}
                        color={'white'}
                        borderRadius={'50%'}
                        height={30}
                        width={30}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        onClick={() => addQuantityItem(item.id)}
                        disabled={item.quantity === 10}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Add />
                    </Box>
                </Box>
            </TableCell>
            <TableCell align="center">{`$${(item.price * item.quantity).toFixed(
                2
            )}`}</TableCell>
            <TableCell>
                <IconButton onClick={() => deleteItemCart(item.id)}>
                    <DeleteForever color="error" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
