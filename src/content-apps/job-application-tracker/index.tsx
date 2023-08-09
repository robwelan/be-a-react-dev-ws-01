/*
  https://signaldb.js.org/getting-started/
*/
import React, { useState } from 'react';
//  local bits and bobs
import defaultState from './state/default-state';
import { State } from './state/interfaces';

const ContentJAT = () => {
  const [state, setState] = useState<State>(defaultState);
  console.log('state', state);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      JAT
    </div>
  );
};

export default ContentJAT;
