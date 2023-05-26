//  local utilities
import { PayloadSetDecisionUser, State } from './interfaces';

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
