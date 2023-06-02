import defaultState from '../state/default-state';
//  interfaces
import { SetState, State } from '../state/interfaces';

const setClearGame = (payload: SetState) => {
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
