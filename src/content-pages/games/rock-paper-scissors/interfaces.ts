interface State {
  decision: { computer?: string; user?: string };
  games: number;
  result: {
    label?: string;
    computer: boolean;
    user: boolean;
  };
  thinking: boolean;
  win: { computer: number; user: number };
}

interface PayloadSetDecisionComputer {
  setState: (state: State) => State;
}

interface PayloadSetDecisionUser {
  decision: string;
  setState: (state: State) => State;
}

interface PayloadClearAll {
  setState: (state: State) => State;
}

interface PayloadClearGame {
  setState: (state: State) => State;
}

export {
  PayloadClearAll,
  PayloadClearGame,
  PayloadSetDecisionComputer,
  PayloadSetDecisionUser,
  State,
};
