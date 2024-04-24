import { Box, CircularProgress } from '@mui/material';

export const LoadingIndicator = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt={10}
            width="100%"
        >
            <CircularProgress
                size={32}
                style={{ marginRight: '8px', animationDelay: '-0.3s' }}
            />
        </Box>
    );
};
