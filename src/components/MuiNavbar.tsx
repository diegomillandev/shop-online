import { AppBar, Grid, Toolbar } from '@mui/material';
import { AccountIconNavbar, Cart, Logo, SearchInput } from '.';
import { Link } from 'react-router-dom';

export const MuiNavbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid
                    container
                    sx={{ paddingTop: 1, paddingBottom: { xs: 2, sm: 1 } }}
                    alignItems={'center'}
                >
                    <Grid item xs={9} sm={3} md={2} alignSelf={'center'}>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
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
                        <AccountIconNavbar />
                        <Cart />
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
