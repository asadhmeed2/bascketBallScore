import React from "react";
import { VerticalCounter } from "../VerticalCounter";

export const TimerForm = () => {
  return (
    <div className="flex justify-center">
      {/* seconds */}
      <VerticalCounter onChange={(value) => console.log(value)} />

      {/* minutes */}
      <VerticalCounter onChange={(value) => console.log(value)} />

      {/* hours */}
      <VerticalCounter onChange={(value) => console.log(value)} />
    </div>
  );
};
