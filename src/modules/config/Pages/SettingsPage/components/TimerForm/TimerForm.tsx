import React from "react";
import dayjs from "dayjs";

import { VerticalCounter } from "../VerticalCounter";
import { useTimerStore } from "../../../../../home/store";

export const TimerForm = () => {
  const { defaultTimer, increaseSeconds, increaseMinutes, increaseHours } =
    useTimerStore((state) => state);

  const seconds = dayjs.duration(defaultTimer, "seconds").seconds();
  const minutes = dayjs.duration(defaultTimer, "seconds").minutes();
  const hours = dayjs.duration(defaultTimer, "seconds").hours();

  return (
    <div className="flex justify-center">
      {/* hours */}
      <VerticalCounter value={hours} onChange={increaseHours} />

      {/* minutes */}
      <VerticalCounter value={minutes} onChange={increaseMinutes} />

      {/* seconds */}
      <VerticalCounter value={seconds} onChange={increaseSeconds} />
    </div>
  );
};
