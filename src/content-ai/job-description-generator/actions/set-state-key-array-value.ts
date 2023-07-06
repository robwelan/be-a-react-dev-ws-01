import { set as _Set } from 'lodash';
import doValidateString from './do-validate-string';

const setStateKeyValue = (payload) => {
  const { key, setState, value } = payload;
  const arrayValue = value.split('\n');
  console.log('arrayValue', arrayValue);
  setState((prevState) => {
    const newState = JSON.parse(JSON.stringify(prevState));

    _Set(newState, key, arrayValue);

    doValidateString({ object: newState, key });

    return newState;
  });
};

export default setStateKeyValue;
