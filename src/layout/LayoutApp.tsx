import { Box, Container } from '@mui/material';
import { MuiNavbar } from '../components';

export const LayoutApp = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <MuiNavbar />
            <Container>
                <Box sx={{ marginTop: { xs: 16, sm: 10 } }}>{children}</Box>
            </Container>
        </>
    );
};
