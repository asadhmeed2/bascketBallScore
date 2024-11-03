import { IonButton } from "@ionic/react";
import React, { useCallback } from "react";

type Props = {
  onChange: (num: number) => void;
  value: number;
};

export const VerticalCounter = (props: Props) => {
  const onIncrement = useCallback(() => {
    props.onChange(1);
  }, [props.value]);

  const onDecrement = useCallback(() => {
    const newVal = props.value - 1;

    if (newVal < 0) {
      props.onChange(0);
      return;
    }

    props.onChange(-1);
  }, [props.value]);

  return (
    <div className="flex flex-col items-center">
      <IonButton fill="clear" onClick={onIncrement}>
        +
      </IonButton>
      <div>{props.value}</div>
      <IonButton fill="clear" onClick={onDecrement}>
        -
      </IonButton>
    </div>
  );
};
