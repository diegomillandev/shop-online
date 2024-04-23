import { MuiNavbar } from '../components';

export const LayoutApp = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <MuiNavbar />
            {children}
        </>
    );
};
