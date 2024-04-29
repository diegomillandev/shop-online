import { create } from 'zustand';

interface State {
    openModal: boolean;
    searchItem: string;
    openModalLogin: boolean;
    setOpenModal: (open: boolean) => void;
    setSearchItem: (search: string) => void;
    setOpenModalLogin: (open: boolean) => void;
}

export const useEvents = create<State>((set) => ({
    openModal: false,
    openModalLogin: false,
    searchItem: '',
    setOpenModal: (open: boolean) => set({ openModal: open }),
    setSearchItem: (search: string) => set({ searchItem: search }),
    setOpenModalLogin: (open: boolean) => set({ openModalLogin: open }),
}));
