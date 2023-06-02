import defaultState from '../state/default-state';
//  interfaces
import { SetState, State } from '../state/interfaces';

interface Payload {
  setState: SetState;
}

const setClearGame = (payload: Payload) => {
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
