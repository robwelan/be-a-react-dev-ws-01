//  local utilities
import { PayloadSetDecisionUser, State } from '../state/interfaces';

const setDecisionUser = (payload: PayloadSetDecisionUser) => {
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
