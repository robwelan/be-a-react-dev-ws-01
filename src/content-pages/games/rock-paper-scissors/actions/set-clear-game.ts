import defaultState from '../state/default-state';
//  interfaces
import { PayloadClearGame, State } from '../state/interfaces';

const setClearGame = (payload: PayloadClearGame) => {
  const { setState } = payload;

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...defaultState.decision,
    },
    result: {
      ...defaultState.result,
    },
  }));
};

export default setClearGame;
