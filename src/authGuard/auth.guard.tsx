import { Redirect } from 'react-router-dom';
import { useUserAdmin } from '../store/userAdmin';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const [tokenUserAdmin] = useUserAdmin((state) => [state.tokenUserAdmin]);
    return tokenUserAdmin ? children : <Redirect to="/admin/login" />;
};
