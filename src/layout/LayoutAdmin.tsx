import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Sidebar } from '../components';
import { useEvents, useUserAdmin } from '../store';

export const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
    const [setLogout] = useUserAdmin((state) => [state.setLogout]);
    const [isOpenSidebar, setIsOpenSidebar] = useEvents((state) => [
        state.isOpenSidebar,
        state.setIsOpenSidebar,
    ]);

    const timer = useRef<number>(5000);

    const startTimer = () => {
        timer.current = window.setTimeout(() => {
            setLogout();
        }, 3000000);
    };

    const stopTimer = () => {
        clearTimeout(timer.current);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setIsOpenSidebar(true);
            } else {
                setIsOpenSidebar(false);
            }
        });

        window.addEventListener('blur', startTimer);
        window.addEventListener('focus', stopTimer);

        return () => {
            window.removeEventListener('resize', () => {});
            window.removeEventListener('blur', startTimer);
            window.removeEventListener('focus', stopTimer);
        };
    }, []);
    return (
        <Box>
            <Sidebar />
            <Box
                as="main"
                ml={isOpenSidebar ? '44' : '0'}
                minH={'100vh'}
                pt={20}
                px={8}
                pb={10}
                bg={'gray.800'}
            >
                {children}
            </Box>
        </Box>
    );
};
