import { set as _Set } from 'lodash';
import doValidateString from './do-validate-string';

const setStateKeyValue = (payload) => {
  const { key, setState, value } = payload;

  setState((prevState) => {
    const newState = JSON.parse(JSON.stringify(prevState));

    _Set(newState, key, value);

    doValidateString({ object: newState, key });

    return newState;
  });
};

export default setStateKeyValue;
