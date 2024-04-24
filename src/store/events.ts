import { create } from 'zustand';

interface State {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

export const useEvents = create<State>((set) => ({
    openModal: false,
    setOpenModal: (open: boolean) => set({ openModal: open }),
}));
