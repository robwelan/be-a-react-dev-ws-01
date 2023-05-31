import defaultState from '../state/default-state';
//  interfaces
import { PayloadClearAll } from '../state/interfaces';

const setClearAll = (payload: PayloadClearAll) => {
  const { setState } = payload;

  setState(defaultState);
};

export default setClearAll;
