import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserAdminData } from '../types/types';

interface UserState {
    userAdmin: UserAdminData | null;
    tokenUserAdmin: string | null;
    setUserAdmin: (user: UserAdminData) => void;
    setTokenUserAdmin: (token: string) => void;
    setLogout: () => void;
}

const userAdminData = {
    token: '',
    email: 'diegomillandev@gmail.com',
    name: {
        firstname: 'Diego',
        lastname: 'Millan',
    },
};

export const useUserAdmin = create<UserState>()(
    persist(
        (set) => ({
            userAdmin: null,
            tokenUserAdmin: null,
            setUserAdmin: (userAdmin) => set({ userAdmin }),
            setTokenUserAdmin: (tokenUserAdmin) => {
                set({ tokenUserAdmin });
                set({ userAdmin: { ...userAdminData, token: tokenUserAdmin } });
            },
            setLogout: () => {
                set({ userAdmin: null });
                set({ tokenUserAdmin: null });
            },
        }),
        {
            name: 'user-admin-storage',
        },
    ),
);
