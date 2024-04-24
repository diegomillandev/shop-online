import { Search } from '@mui/icons-material';
import { Box } from '@mui/material';

export const SearchInput = () => {
    return (
        <Box
            component={'div'}
            display={'flex'}
            borderRadius={1}
            sx={{
                bgcolor: 'white',
                overflow: 'hidden',
                width: { xs: 'auto', md: '60%' },
                display: 'flex',
                height: 36,
            }}
            position={'relative'}
        >
            <Box
                component={'input'}
                placeholder="Search FakeStore"
                sx={{
                    width: '100%',
                    border: 'none',
                    paddingLeft: 1,
                    fontSize: 15,
                    '&:focus': {
                        outline: 'none',
                    },
                }}
            ></Box>
            <Box
                component={'button'}
                sx={{
                    border: 'none',
                    cursor: 'pointer',
                    bgcolor: '#ffb875',
                    alignSelf: 'end',
                }}
                display={'flex'}
                justifyItems={'center'}
                alignItems={'center'}
            >
                <Box
                    component={'div'}
                    sx={{
                        width: 32,
                        height: 36,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Search sx={{ fontSize: 24 }} color="primary" />
                </Box>
            </Box>
        </Box>
    );
};
