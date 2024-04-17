import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ShoppingCart, Store } from '@mui/icons-material';
import { ProductTypeCart } from '../types/Products';
import { cutString } from '../helpers';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const MuiNabvar = ({
    cartItems,
    deleteToCart,
    addItemCart,
    deletItemCart,
    clearCart,
    inputSearch,
    setInputSearch,
}: {
    cartItems: ProductTypeCart[];
    deleteToCart: (id: ProductTypeCart['id']) => void;
    addItemCart: (id: ProductTypeCart['id']) => void;
    deletItemCart: (id: ProductTypeCart['id']) => void;
    clearCart: () => void;
    inputSearch: string;
    setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const totalCost = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            letterSpacing: 1,
                        }}
                    >
                        Fake Store
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            marginLeft: 0,
                            alignSelf: 'center',
                            padding: 0,
                            marginRight: 2,
                        }}
                    >
                        <Store sx={{ width: 40, height: 40, marginTop: 1 }} />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search items"
                            inputProps={{ 'aria-label': 'search' }}
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>
                        <div className="relative group">
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={cartItems.length}
                                    color="error"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            <div className="hidden group-hover:block absolute bg-white text-gray-800 p-3 z-40 top-full -right-12 md:right-0 rounded shadow-lg">
                                {cartItems.length > 0 ? (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr className="[&>th]:text-gray-600 [&>th]:px-2">
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item) => (
                                                    <tr
                                                        className="[&>td]:px-2 content-center [&>td]:my-auto pt-3 border-b-2 border-gray-200"
                                                        key={item.id}
                                                    >
                                                        <td>
                                                            <img
                                                                className="img-fluid"
                                                                src={item.image}
                                                                alt="imagen guitarra"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {`${cutString(
                                                                item.title,
                                                                16
                                                            )}...`}
                                                        </td>
                                                        <td className="fw-bold">
                                                            ${item.price}
                                                        </td>
                                                        <td className="">
                                                            <div className="flex items-center">
                                                                <button
                                                                    type="button"
                                                                    className="text-2xl bg-gray-900 text-white w-4 h-4 flex items-center justify-center rounded"
                                                                    onClick={() =>
                                                                        deleteToCart(
                                                                            item.id
                                                                        )
                                                                    }
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="mx-1 font-bold">
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    className="text-rose-200xl bg-gray-900 text-white w-4 h-4 flex items-center justify-center rounded"
                                                                    onClick={() => {
                                                                        addItemCart(
                                                                            item.id
                                                                        );
                                                                    }}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="bg-red-300 hover:bg-red-500 text-white w-6 h-6 rounded-full"
                                                                type="button"
                                                                onClick={() =>
                                                                    deletItemCart(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p className="font-bold text-end my-1">
                                            Total:{' '}
                                            <span className="fw-bold">
                                                ${totalCost.toFixed(2)}
                                            </span>
                                        </p>
                                        <button
                                            onClick={() => clearCart()}
                                            className="bg-gray-800 text-white w-full py-2 rounded-md "
                                        >
                                            Clear Cart
                                        </button>
                                    </>
                                ) : (
                                    <p className="text-center p-2 w-32 font-bold">
                                        Cart is empty
                                    </p>
                                )}
                            </div>
                        </div>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};
