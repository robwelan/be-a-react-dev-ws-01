//  local utilities
import { PayloadSetDecisionUser } from './interfaces';

const setDecisionUser = (payload: PayloadSetDecisionUser) => {
  const { decision, setState } = payload;

  setState((prevState) => ({
    ...prevState,
    decision: {
      ...prevState.decision,
      user: decision,
    },
  }));
};

export default setDecisionUser;
