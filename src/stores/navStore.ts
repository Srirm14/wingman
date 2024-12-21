// src/store/filterStore.ts

import { create } from "zustand";

// Define the store using Zustand
interface FilterStore {
    selected: string;
    setSelected: (selected: string) => void;
}

export const useNavStore = create<FilterStore>((set) => ({
    selected: "home",
    setSelected: (selected) => set({ selected }),
}));
