//  random
import random from 'random';
//  local utilities
import choice from '../state/choices';
import getResult from './get-result';
import { SetState, State } from '../state/interfaces';

interface Payload {
  setState: SetState;
  userDecision: string;
}

const setDecisionComputer = (payload: Payload) => {
  const { setState, userDecision } = payload;
  const decisionComputer = choice[choice.index[random.int(0, 4)]];
  const decisionUser = choice[userDecision];
  const result = getResult({
    computerDecision: decisionComputer,
    userDecision: decisionUser,
  });

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...prevState.decision,
      computer: decisionComputer.value,
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
