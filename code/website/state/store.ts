import create from "zustand";
import { Charity } from './../types/types';

const useStore = create((set) => ({
    charities: [],
    setCharities: (...charities: Charity[]) =>
    set((state: any) => ({
        charities: [
            ...charities,
        ]
    })),
    addCharity: (charity: Charity) =>
        set((state: any) => ({
            charities: [
                charity,
                ...state.charities,
            ]
        }))
}));
export default useStore;