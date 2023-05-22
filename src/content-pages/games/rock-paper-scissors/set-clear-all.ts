import defaultState from './default-state';
//  interfaces
import { PayloadClearAll } from './interfaces';

const setClearAll = (payload: PayloadClearAll) => {
  const { setState } = payload;

  setState(defaultState);
};

export default setClearAll;
