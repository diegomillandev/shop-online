import { Search } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEvents } from '../store';

export const SearchInput = () => {
    const [setSearchItem] = useEvents((state) => [state.setSearchItem]);
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
                onChange={(e) => setSearchItem(e.target.value.trim())}
            ></Box>
            <Box
                component={'button'}
                sx={{
                    border: 'none',
                    cursor: 'pointer',
                    bgcolor: 'secondary.main',
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
