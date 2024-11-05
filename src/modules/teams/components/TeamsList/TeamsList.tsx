import React from "react";

import { useTeamsStore } from "../../store";

import { TeamListItem } from "../TeamListItem";

export const TeamsList = () => {
  const { teamsList } = useTeamsStore((state) => state);

  return (
    <div>
      {teamsList.map((team) => (
        <div className="mb-1">
          <TeamListItem key={team.id} team={team} />
        </div>
      ))}
    </div>
  );
};
