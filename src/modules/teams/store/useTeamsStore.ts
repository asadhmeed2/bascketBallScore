import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { Team } from "../../shared/types";

type TeamsListState = {
  teamsList: Team[];
  addTeam: (team: Team) => void;
  removeTeam: (id: string) => void;
  updateTeam: (id: string, team: Team) => void;
};

export const useTeamsStore = create<TeamsListState>()(
  devtools((set) => ({
    teamsList: [],
    addTeam: (team) =>
      set((state) => ({ teamsList: [...state.teamsList, team] })),
    removeTeam: (id) =>
      set((state) => ({
        teamsList: state.teamsList.filter((team) => team.id !== id),
      })),
    updateTeam: (id, team) =>
      set((state) => ({
        teamsList: state.teamsList.map((t) => (t.id === id ? team : t)),
      })),
  }))
);
