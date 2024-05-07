import { Box, Spinner } from '@chakra-ui/react';

export const LoadingIndicatorChakraUi = ({ color }: { color?: string }) => {
    const colorValue = color ? color : 'blue';

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt={10}
            width="100%"
        >
            <Spinner
                size="lg"
                color={colorValue}
                marginRight="8px"
                speed="0.75s"
            />
        </Box>
    );
};
