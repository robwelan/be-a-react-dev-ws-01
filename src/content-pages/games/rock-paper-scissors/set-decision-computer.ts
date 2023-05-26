//  random
import random from 'random';
//  local utilities
import choice from './choices';
import getResult from './get-result';
import { PayloadSetDecisionComputer } from './interfaces';

const setDecisionComputer = (payload: PayloadSetDecisionComputer) => {
  const { setState, userDecision } = payload;
  const decision = choice[choice.index[random.int(1, 2)]];
  const result = getResult({ computerDecision: decision, userDecision });

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...prevState.decision,
      computer: decision.value,
    },
    games: {
      total: prevState.games.total + 1,
      computer: prevState.games.computer + result.computer,
      user: prevState.games.user + result.user,
    },
    result: {
      label: result.judgement,
      computer: result.computer === 1,
      user: result.user === 1,
    },
  }));
};

export default setDecisionComputer;
