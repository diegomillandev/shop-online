import { create } from 'zustand';

interface State {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    searchItem: string;
    setSearchItem: (search: string) => void;
}

export const useEvents = create<State>((set) => ({
    openModal: false,
    searchItem: '',
    setOpenModal: (open: boolean) => set({ openModal: open }),
    setSearchItem: (search: string) => set({ searchItem: search }),
}));
