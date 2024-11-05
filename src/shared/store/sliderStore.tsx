import { create } from "zustand";

import { IFormOptionsPage1 } from "../types/types";

interface State {
  fullfilledPages: boolean[];
  dataPage1: IFormOptionsPage1 | null;
  activeSlide: number;
  pages: number;
  setFullfilledPages: (value: boolean[]) => void;
  setActiveSlide: (value: number) => void;
  setPages: (value: number) => void;
  setDataPage1: (value: IFormOptionsPage1 | null) => void;
}
export const slidesStore = create<State>()((set) => ({
  fullfilledPages: [],
  activeSlide: 0,
  pages: 0,
  dataPage1: null,
  setDataPage1(value) {
    set({ dataPage1: value });
  },
  setFullfilledPages(value) {
    set({
      fullfilledPages: value,
    });
  },
  setActiveSlide: (value) => set({ activeSlide: value }),
  setPages: (value) => set({ pages: value }),
}));
