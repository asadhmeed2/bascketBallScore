import React, { useCallback } from "react";

import { IonButton, IonSelect, IonSelectOption } from "@ionic/react";

import { useTeamsStore } from "../../../teams/store";
import { useGameStore } from "../../store";
import { Team } from "../../../shared/types";
import { set } from "react-hook-form";

type Props = {
  teamNumber: string;
};

export const TeamScore = (props: Props) => {
  const [lastAddedScore, setLastAddedScore] = React.useState(0);

  const [team, setTeam] = React.useState<Team>({
    id: "",
    name: "",
    score: 0,
  });

  const { teamsList } = useTeamsStore((state) => state);

  const { setTeam1, setTeam2, updateTeam } = useGameStore((state) => state);

  const onChangeTeam = useCallback(
    (id: string) => {
      const team = teamsList.find((team) => team.id === id);

      if (team) {
        if (props.teamNumber === "1") {
          setTeam1(team);
        } else {
          setTeam2(team);
        }

        setTeam(team);
      }
    },
    [teamsList]
  );

  const onIncreaseScore = useCallback(
    (score: number) => {
      setLastAddedScore(score);

      updateTeam({ ...team, score: team.score + score });

      setTeam((prev) => ({ ...prev, score: prev.score + score }));
    },
    [updateTeam, team]
  );

  const onDecreaseScore = useCallback(() => {
    updateTeam({ ...team, score: team.score - lastAddedScore });

    setTeam((prev) => ({ ...prev, score: prev.score - lastAddedScore }));

    setLastAddedScore(0);
  }, [lastAddedScore, updateTeam, team]);

  const disableResetBtn = lastAddedScore === 0 || team.score === 0;

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center">
          <IonSelect
            className="w-1/2"
            onIonChange={(e) => onChangeTeam(e.detail.value)}
            placeholder={`Select Team ${props.teamNumber}`}
          >
            {teamsList.map((team) => (
              <IonSelectOption key={team.id} value={team.id}>
                {team.name}
              </IonSelectOption>
            ))}
          </IonSelect>
          <span>:</span>
          <div className="flex items-center justify-center mx-2">
            {team.score}
          </div>
        </div>

        <div className="flex justify-center flex-wrap px-4">
          <IonButton className="flex-1" onClick={() => onIncreaseScore(3)}>
            +3
          </IonButton>

          <IonButton className="flex-1" onClick={() => onIncreaseScore(2)}>
            +2
          </IonButton>
        </div>

        <div className="flex justify-center">
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
