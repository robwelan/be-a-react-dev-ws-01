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
  const timer = random.int(1, 5) * 1000;

  setState((prevState) => ({ ...prevState, thinking: true }));

  setTimeout(() => {
    setState((prevState) => ({
      ...prevState,
      decision: {
        ...prevState.decision,
        computer: decision.value,
      },
      games: prevState.games + 1,
      result: {
        label: result.judgement,
        computer: result.computer === 1,
        user: result.user === 1,
      },
      thinking: false,
      win: {
        computer: prevState.win.computer + result.computer,
        user: prevState.win.user + result.user,
      },
    }));
  }, timer);
};

export default setDecisionComputer;
