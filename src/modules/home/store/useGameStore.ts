import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { Team } from "../../shared/types";

type TimerState = {
  team1: Team;
  team2: Team;

  setTeam1: (team: Team) => void;
  setTeam2: (team: Team) => void;
  updateTeam: (team: Team) => void;
};

export const useGameStore = create<TimerState>()(
  devtools((set) => ({
    team1: {
      id: "",
      name: "",
      score: 0,
    },
    team2: {
      id: "",
      name: "",
      score: 0,
    },

    setTeam1: (team) =>
      set((state) => {
        return { team1: team };
      }),
    setTeam2: (team) =>
      set((state) => {
        return { team2: team };
      }),
    updateTeam(team) {
      set((state) => {
        if (state.team1.id === team.id) {
          return {
            team1: team,
          };
        }
        return {
          team2: team,
        };
      });
    },
  }))
);
