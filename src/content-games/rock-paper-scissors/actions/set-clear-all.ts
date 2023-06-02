import defaultState from '../state/default-state';
//  interfaces
import { SetState } from '../state/interfaces';

interface Payload {
  setState: SetState;
}

const setClearAll = (payload: Payload) => {
  const { setState } = payload;

  setState(defaultState);
};

export default setClearAll;
