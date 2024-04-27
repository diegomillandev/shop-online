import { Box, Container } from '@mui/material';
import { MuiNavbar } from '../components';

export const LayoutApp = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <MuiNavbar />
            <Container>
                <Box marginTop={{ xs: 16, sm: 12 }} marginBottom={6}>
                    {children}
                </Box>
            </Container>
        </>
    );
};
