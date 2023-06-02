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

export { SetState, State };
