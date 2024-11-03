import { IonButton } from "@ionic/react";
import React, { useCallback } from "react";

type Props = {
  score: number;
  onIncreaseScore: (score: number) => void;
  onDecreaseScore: (score: number) => void;
  teamName: string;
};

export const TeamScore = (props: Props) => {
  const [lastAddedScore, setLastAddedScore] = React.useState(0);

  const onIncreaseScore = (score: number) => {
    setLastAddedScore(score);
    props.onIncreaseScore(score);
  };

  const onDecreaseScore = useCallback(() => {
    props.onDecreaseScore(lastAddedScore);

    setLastAddedScore(0);
  }, [lastAddedScore]);

  const disableResetBtn = lastAddedScore === 0 || props.score === 0;

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center">
          <div>Team {props.teamName}</div>
          <span>:</span>
          <div className="flex items-center justify-center mx-2">
            {props.score}
          </div>
        </div>

        <div className="flex justify-center">
          <IonButton onClick={() => onIncreaseScore(3)}>+3</IonButton>

          <IonButton onClick={() => onIncreaseScore(2)}>+2</IonButton>

          {/* remove last added score */}
          <IonButton
            color={"danger"}
            onClick={onDecreaseScore}
            disabled={disableResetBtn}
          >
            remove last score
          </IonButton>
        </div>
      </div>
    </>
  );
};
