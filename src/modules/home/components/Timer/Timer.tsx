import { IonButton } from "@ionic/react";
import React, { useCallback, useEffect, useRef } from "react";

import dayjs from "dayjs";

type Props = {
  defaultTime: number; //seconds
};

export const Timer = (props: Props) => {
  const [timer, setTimer] = React.useState(0);

  const intervalIdRef = useRef<NodeJS.Timeout>();

  const startTimer = useCallback(() => {
    setTimer((prev) => {
      if (prev === 1) {
        // stop timer
        clearInterval(intervalIdRef.current);

        return props.defaultTime;
      }

      return prev - 1;
    });
  }, [props.defaultTime]);

  const onStartTimer = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(startTimer, 1000);
  }, [timer]);

  const onPauseTimer = useCallback(() => {
    clearInterval(intervalIdRef.current);
  }, []);

  const onResetTimer = useCallback(() => {
    clearInterval(intervalIdRef.current);
    setTimer(props.defaultTime);
  }, []);

  useEffect(() => {
    setTimer(props.defaultTime);

    return () => clearInterval(intervalIdRef.current);
  }, [props.defaultTime]);

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
