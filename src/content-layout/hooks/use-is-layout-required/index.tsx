import { useEffect, useState } from 'react';
//  local constants
import defaultState from './default-state';
//  local utilities
import checkRule from './check-rule';

type Payload = {
  pathname: string;
};

const useIsLayoutRequired = (payload: Payload) => {
  const { pathname } = payload;
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const result = checkRule({ pathname });

    setState(result);

    return () => setState(defaultState);
  }, [pathname]);

  return state;
};

export default useIsLayoutRequired;
