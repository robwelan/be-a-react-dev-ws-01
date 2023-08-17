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
import getIsExpectedType from './utilities/get-is-expected-type';
//  types and interfaces
import {
  Controls,
  DataTypesForHtml,
} from '../../components/input-for-floating-form-control/define-types-and-interfaces';

type handleState = {
  key: string;
  type: {
    control: string;
    data: string;
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

      if (
        getIsExpectedType({
          value: type.data,
          type: DataTypesForHtml.String,
        })
      ) {
        _Set(newState, key, value);
      }

      if (
        getIsExpectedType({
          value: type.data,
          type: DataTypesForHtml.Date,
        })
      ) {
        if (value) {
          _Set(newState, key, value);
        }

        if (!value) {
          //  TODO: check if this is required here
          _Set(newState, key, '');
        }
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
