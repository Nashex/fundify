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
    removeTier: (charity: Charity, tier: Tier) =>
        set((state: any) => {
            const charities = state.charities.map((o: Charity) => {
                if (o.id === charity.id) {
                    const tiers = o.tiers || [];
                    return ({
                        ...o,
                        tiers: tiers.filter(o => o.id != tier.id)
                    });
                }
                return o;
            });
            return {
                ...state,
                charities
            };
        }),
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