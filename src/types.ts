export interface Team {
  name: string;
  logoUrl: string;
  seed?: number;
  conference: "Eastern" | "Western";
}

export interface PlayoffGame {
  id: string;
  round: "Semifinal" | "Championship";
  conference: "Eastern" | "Western";
  team1: Team;
  team2: Team;
  score1: number;
  score2: number;
  winner: string;
  recapTitle?: string;
  recapSubtitle?: string;
  recapText?: string;
  date?: string;
}

export interface MvpCandidate {
  id: string;
  name: string;
  team: string;
  logoUrl: string;
  position: string;
  category: "Offense" | "Defense";
  statsSummary: string;
  narrative: string;
  keyStats: {
    label: string;
    value: string | number;
    percentOfMax: number; // For rendering visual bar scales
  }[];
}

export interface WfaTeam {
  rank: number;
  name: string;
  logoUrl: string;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
  nextMatch: string;
  details: string;
  statsSummary: string;
  narrative: string;
}

export interface PredictorPoll {
  rebellionVotes: number;
  spartansVotes: number;
  userVotedTeam?: string; // "San Diego Rebellion" | "Texas Elite Spartans"
}
