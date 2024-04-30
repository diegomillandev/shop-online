import { create } from 'zustand';
import { User } from '../types/types';

interface UserState {
    user: User | null;
    token: string | null;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
}

export const useUser = create<UserState>((set) => ({
    user: null,
    token: null,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
}));