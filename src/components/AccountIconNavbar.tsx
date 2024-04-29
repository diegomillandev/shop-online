import { AccountCircle } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useEvents } from '../store';

export const AccountIconNavbar = () => {
    const [openModalLogin, setOpenModalLogin] = useEvents((state) => [
        state.openModalLogin,
        state.setOpenModalLogin,
    ]);
    const handleLogin = () => {
        setOpenModalLogin(!openModalLogin);
    };
    return (
        <Button onClick={handleLogin}>
            <Box
                paddingTop={1}
                component={'div'}
                color={'primary.contrastText'}
            >
                <AccountCircle fontSize="large" />
            </Box>
        </Button>
    );
};
