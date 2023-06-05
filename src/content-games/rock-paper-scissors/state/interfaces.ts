import { Dispatch, SetStateAction } from 'react';

interface State {
  decision: {
    computer?: string;
    user?: string;
  };
  games: {
    computer: number;
    total: number;
    user: number;
  };
  result: {
    label?: string;
    computer: boolean;
    user: boolean;
  };
}

interface SetState {
  setState: Dispatch<SetStateAction<State>>;
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
  SetState,
  State,
};