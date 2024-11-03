import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerState = {
  timer: number;
  defaultTimer: number;
  setTimer: (timer: number) => void;
  decreaseTimer: () => void;
};

export const useTimerStore = create<TimerState>()(
  devtools((set) => ({
    timer: 600, //seconds
    defaultTimer: 360,
    setTimer: (timer) => set((state) => ({ timer: timer })),
    decreaseTimer: () => set((state) => ({ timer: state.timer - 1 })),
  }))
);
