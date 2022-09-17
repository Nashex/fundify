import create from "zustand";
import { Charity, Tier } from './../types/types';

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
        })),
    addTier: (charity: Charity, tier: Tier) =>
        set((state: any) => {
            const charities = state.charities.map((o: Charity) => {
                if (o.id === charity.id) {
                    const tiers = o.tiers || [];
                    return ({
                        ...o,
                        tiers: [
                            tier,
                            ...tiers
                        ]
                    })
                }
                return o;
            });
            return {
                ...state,
                charities
            };
        })
}));
export default useStore;