//  random
import random from 'random';
//  local utilities
import choices from '../state/choices';
import getResult from './get-result';
import { SetState, State } from '../state/interfaces';

interface Payload {
  setState: SetState;
  userDecision: string;
}

type ComputerDecision = {
  beats: string;
  value: string;
};

const setDecisionComputer = (payload: Payload) => {
  const { setState, userDecision } = payload;
  const randomiser = random.int(0, choices.index.length - 1);
  const choice = choices.index.at(randomiser);
  const decision = choices[choice as keyof typeof choices] as ComputerDecision;

  const result = getResult({
    computerDecision: decision,
    userDecision,
  });

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
