import React from "react";
import { useTeamsStore } from "../../store";

export const TeamsList = () => {
  const teamsList = useTeamsStore((state) => state.teamsList);

  return <div>TeamsList</div>;
};
