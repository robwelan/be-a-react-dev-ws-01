import defaultState from './default-state';
//  interfaces
import { PayloadClearGame, State } from './interfaces';

const setClearGame = (payload: PayloadClearGame) => {
  const { setState } = payload;

  setState((prevState) => ({
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
