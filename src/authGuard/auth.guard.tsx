import { Redirect } from "react-router-dom";
import { useUser } from "../store";


export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const [user] = useUser(state => [state.user])
    return user?.id ?  children : <Redirect to="/admin/login" />;
}