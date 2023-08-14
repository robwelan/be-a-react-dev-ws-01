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

type handleState = {
  key: string;
  type: string;
  value: string;
};

const ContentJAT = () => {
  const [state, setState] = useState<State>(defaultState);
  const fields = getFieldsFromState({ state });

  const handleSetState = (payload: handleState) => {
    const { key, type, value } = payload;

    setState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      if (type === 'select' || type === 'text' || type === 'url') {
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
