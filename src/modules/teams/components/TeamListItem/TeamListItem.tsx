import React from "react";

import { Team } from "../../../shared/types";

type Props = {
  team: Team;
};

export const TeamListItem = (props: Props) => {
  const { team } = props;

  return (
    <div className="flex justify-between px-4">
      <div>{team.name}</div>
      <div>{team.score}</div>
    </div>
  );
};
