//  local utilities
import { SetState, State } from '../state/interfaces';

interface Payload {
  decision: string;
  setState: SetState;
}

const setDecisionUser = (payload: Payload) => {
  const { decision, setState } = payload;

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...prevState.decision,
      user: decision,
    },
  }));
};

export default setDecisionUser;
