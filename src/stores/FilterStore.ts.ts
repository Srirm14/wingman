// src/store/filterStore.ts

import { create } from "zustand";

// Define the store using Zustand
interface FilterStore {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  toggleOption: (value: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  selectedOption: "7days", // Default option
  setSelectedOption: (value: string) => set({ selectedOption: value }),
  toggleOption: (value: string) => set((state) => ({ selectedOption: value })),
}));
