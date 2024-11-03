import { IonButton } from "@ionic/react";
import React, { useCallback, useEffect, useRef } from "react";

import dayjs from "dayjs";
import { useTimerStore } from "../../store";

type Props = {};

export const Timer = (props: Props) => {
  const { timer, setTimer, defaultTimer, decreaseTimer } = useTimerStore(
    (state) => state
  );

  const intervalIdRef = useRef<NodeJS.Timeout>();

  const startTimer = useCallback(() => {
    if (timer === 1) {
      // stop timer
      clearInterval(intervalIdRef.current);

      setTimer(defaultTimer);
    }

    decreaseTimer();
  }, [timer, setTimer, defaultTimer]);

  const onStartTimer = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(startTimer, 1000);
  }, []);

  const onPauseTimer = useCallback(() => {
    clearInterval(intervalIdRef.current);
  }, []);

  const onResetTimer = useCallback(() => {
    clearInterval(intervalIdRef.current);
    setTimer(defaultTimer);
  }, [defaultTimer]);

  useEffect(() => {
    setTimer(defaultTimer);
    return () => clearInterval(intervalIdRef.current);
  }, []);

  function convertSeconds(seconds: number) {
    const duration = dayjs.duration(seconds, "seconds");
    const hours = duration.hours();
    const minutes = duration.minutes();
    const secs = duration.seconds();

    return `${hours}h ${minutes}m ${secs}s`;
  }

  return (
    <div>
      {/* Timer display */}
      <div className="font-bold text-center py-2">{convertSeconds(timer)}</div>

      {/* Timer controls */}

      <div className="flex justify-center items-center mx-1 flex-wrap">
        {/* Start */}
        <IonButton onClick={onStartTimer}>start</IonButton>

        {/* Pause */}
        <IonButton onClick={onPauseTimer}>Pause</IonButton>

        {/* Continue */}
        <IonButton onClick={onStartTimer}>Continue</IonButton>

        {/* Reset */}
        <IonButton onClick={onResetTimer}>Reset</IonButton>
      </div>
    </div>
  );
};
