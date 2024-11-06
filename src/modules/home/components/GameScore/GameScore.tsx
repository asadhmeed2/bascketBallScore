import React, { useCallback, useState } from "react";
import { IonButton } from "@ionic/react";

import { useGameStore } from "../../store";

import { TeamScore } from "../TeamScore";

export const GameScore = () => {
  const { team1, team2, updateTeam } = useGameStore((state) => state);

  const onResetScore = useCallback(() => {
    updateTeam({ ...team1, score: 0 });
    updateTeam({ ...team2, score: 0 });
  }, [team1, team2, updateTeam]);

  return (
    <div>
      {/* first team score */}
      <div className="my-[30px]">
        <TeamScore teamNumber="1" />
      </div>

      {/* second team score */}
      <div className="">
        <TeamScore teamNumber="2" />
      </div>

      <div className="flex justify-center mt-[50px]">
        <IonButton size="large" onClick={onResetScore}>
          Reset Score
        </IonButton>
      </div>
    </div>
  );
};
