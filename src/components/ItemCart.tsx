import { Add, DeleteForever, Remove } from '@mui/icons-material';
import {
    Box,
    CardMedia,
    IconButton,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material';

export const ItemCart = () => {
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
                        image={
                            'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                        }
                        component={'img'}
                    ></CardMedia>
                    <Typography component={'span'}>
                        {`${"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet".slice(
                            0,
                            14
                        )}...`}
                    </Typography>
                </Box>
            </TableCell>

            <TableCell align="center">$10.00</TableCell>

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
                    >
                        <Remove />
                    </Box>
                    <Box component={'span'} mx={1} fontWeight={'bold'}>
                        1
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
                    >
                        <Add />
                    </Box>
                </Box>
            </TableCell>
            <TableCell align="center">$20.00</TableCell>
            <TableCell>
                <IconButton>
                    <DeleteForever color="error" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
