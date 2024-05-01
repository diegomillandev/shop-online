import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Sidebar } from '../components';
import { useEvents } from '../store';

export const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useEvents((state) => [
        state.isOpenSidebar,
        state.setIsOpenSidebar,
    ]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setIsOpenSidebar(true);
            } else {
                setIsOpenSidebar(false);
            }
        });

        return () => {
            window.removeEventListener('resize', () => {});
        };
    }, []);
    return (
        <Box bg={'gray.800'}>
            <Sidebar />
            <Box
                as="main"
                ml={isOpenSidebar ? '44' : '0'}
                minH="(100vh - 64px)"
            >
                {children}
            </Box>
        </Box>
    );
};
