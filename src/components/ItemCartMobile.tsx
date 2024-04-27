import { Add, DeleteForever, Remove } from '@mui/icons-material';
import {
    Box,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';

export const ItemCartMobile = () => {
    return (
        <>
            <Grid item xs={12}>
                <Grid container alignItems={'center'} px={0.5}>
                    <Grid item xs={3}>
                        <CardMedia
                            width={100}
                            height={100}
                            sx={{
                                objectFit: 'contain',
                            }}
                            image={
                                'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                            }
                            component={'img'}
                        ></CardMedia>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography component={'div'} textAlign={'left'}>
                            {`${"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet".slice(
                                0,
                                22
                            )}...`}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <DeleteForever color="error" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Grid
                    container
                    alignItems={'center'}
                    px={0.5}
                    justifyContent={'space-between'}
                >
                    <Typography variant="body1" fontWeight={'bold'} pl={2}>
                        Quantity
                    </Typography>
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
                            height={25}
                            width={25}
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
                            height={25}
                            width={25}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Add />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Grid
                    container
                    alignItems={'center'}
                    px={0.5}
                    justifyContent={'space-between'}
                >
                    <Typography variant="body1" fontWeight={'bold'} pl={2}>
                        Total
                    </Typography>
                    <Typography variant="body1" fontWeight={'bold'}>
                        $133.00
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Divider />
            </Grid>
        </>
    );
};
