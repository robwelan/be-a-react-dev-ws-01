import React from 'react';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';

const ScriptsForLayout = (props) => {
  const { isLayoutRequired, loaded } = props;

  if (!isLayoutRequired) return null;

  if (loaded) {
    return <DependentScripts />;
  }

  return <IndependentScripts />;
};

export default ScriptsForLayout;
