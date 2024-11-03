import { IonButton } from "@ionic/react";
import React, { useCallback } from "react";

type Props = {
  onChange: (num: number) => void;
};

export const VerticalCounter = (props: Props) => {
  const [value, setValue] = React.useState(0);

  const onIncrement = useCallback(() => {
    const newVal = value + 1;
    setValue(newVal);
    props.onChange(newVal);
  }, [value]);

  const onDecrement = useCallback(() => {
    const newVal = value - 1;

    setValue(newVal);

    if (newVal === 0) {
      props.onChange(0);
      return;
    }

    props.onChange(newVal);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <IonButton fill="clear" onClick={onIncrement}>
        +
      </IonButton>
      <div>{value}</div>
      <IonButton fill="clear" onClick={onDecrement}>
        -
      </IonButton>
    </div>
  );
};
