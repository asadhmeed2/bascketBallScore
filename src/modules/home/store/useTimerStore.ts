import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { Team } from "../../shared/types";

type TimerState = {
  timer: number;
  defaultTimer: number;
  setTimer: (timer: number) => void;
  decreaseTimer: () => void;
  increaseSeconds: (num: number) => void;
  increaseMinutes: (num: number) => void;
  increaseHours: (num: number) => void;
};

export const useTimerStore = create<TimerState>()(
  devtools((set) => ({
    timer: 600, //seconds
    defaultTimer: 360,
    setTimer: (timer) => set((state) => ({ timer: timer })),
    decreaseTimer: () => set((state) => ({ timer: state.timer - 1 })),
    increaseSeconds: (num) =>
      set((state) => ({ defaultTimer: state.defaultTimer + num * 1 })),
    increaseMinutes: (num) =>
      set((state) => ({ defaultTimer: state.defaultTimer + num * 60 })),
    increaseHours: (num) =>
      set((state) => ({ defaultTimer: state.defaultTimer + num * 3600 })),
  }))
);
