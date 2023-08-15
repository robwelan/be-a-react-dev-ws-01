/*
  https://signaldb.js.org/getting-started/
*/
import React, { useState } from 'react';
import { set as _Set } from 'lodash';
//  local components
import JobCard from './card';
//  local state
import defaultState from './state/default-state';
import { State } from './state/interfaces';
//  local utilities
import getFieldsFromState from './utilities/get-fields-from-state';
//  types and interfaces
import {
  Control,
  DataType,
} from '../../components/input-for-floating-form-control/define-types-and-interfaces';

type handleState = {
  key: string;
  type: {
    control: Control;
    data: DataType;
  };
  value: string;
};

const ContentJAT = () => {
  const [state, setState] = useState<State>(defaultState);
  const fields = getFieldsFromState({ state });

  const handleSetState = (payload: handleState) => {
    const { key, type, value } = payload;

    setState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      if (type.data === 'string') {
        _Set(newState, key, value);
      }

      return newState;
    });
  };

  return (
    <>
      <JobCard fields={fields} handler={handleSetState} />
    </>
  );
};

export default ContentJAT;
