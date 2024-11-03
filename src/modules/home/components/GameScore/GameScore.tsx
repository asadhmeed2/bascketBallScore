import React, { useCallback, useState } from "react";
import { TeamScore } from "../TeamScore";
import { IonButton } from "@ionic/react";

export const GameScore = () => {
  const [firstTeamScore, setFirstTeamScore] = useState(0);
  const [secondTeamScore, setSecondTeamScore] = useState(0);

  const onIncreaseFirstTeamScore = useCallback((score: number) => {
    setFirstTeamScore((prev) => prev + score);
  }, []);

  const onDecreaseFirstTeamScore = useCallback(
    (score: number) => {
      if (firstTeamScore === 0) {
        return;
      }

      setFirstTeamScore((prev) => prev - score);
    },
    [firstTeamScore]
  );

  const onIncreaseSecondTeamScore = useCallback((score: number) => {
    setSecondTeamScore((prev) => prev + score);
  }, []);

  const onDecreaseSecondTeamScore = useCallback(
    (score: number) => {
      if (firstTeamScore === 0) {
        return;
      }

      setSecondTeamScore((prev) => prev - score);
    },
    [firstTeamScore]
  );

  const onResetScore = useCallback(() => {
    setFirstTeamScore(0);
    setSecondTeamScore(0);
  }, []);

  return (
    <div>
      {/* first team score */}
      <div className="my-[30px]">
        <TeamScore
          score={firstTeamScore}
          onDecreaseScore={onDecreaseFirstTeamScore}
          onIncreaseScore={onIncreaseFirstTeamScore}
          teamName="1"
        />
      </div>

      {/* second team score */}
      <div className="">
        <TeamScore
          score={secondTeamScore}
          onDecreaseScore={onDecreaseSecondTeamScore}
          onIncreaseScore={onIncreaseSecondTeamScore}
          teamName="2"
        />
      </div>

      <div className="flex justify-center mt-[50px]">
        <IonButton size="large" onClick={onResetScore}>
          Reset Score
        </IonButton>
      </div>
    </div>
  );
};
