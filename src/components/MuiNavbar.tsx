import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import { AccountIconNavbar, Cart, Logo, SearchInput } from '.';

export const MuiNavbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid
                    container
                    sx={{
                        paddingTop: 1,
                        paddingBottom: { xs: 2, sm: 1 },
                        rowGap: { xs: 1, sm: 0 },
                    }}
                    alignItems={'center'}
                >
                    <Grid item xs={9} sm={3} md={2} alignSelf={'center'}>
                        <Logo />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sm={3}
                        md={1}
                        sx={{
                            order: { sm: 2 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'end' },
                        }}
                    >
                        <Box
                            component={'div'}
                            display={'flex'}
                            alignItems={'center'}
                            gap={1}
                        >
                            <AccountIconNavbar />
                            <Cart />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={9}
                        sx={{ justifyContent: { md: 'center' } }}
                    >
                        <SearchInput />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
