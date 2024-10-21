import React from 'react';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';

type Props = {
  isLayoutRequired: boolean;
  loaded: boolean;
};

const ScriptsForLayout = (props: Props) => {
  const { isLayoutRequired, loaded } = props;

  if (!isLayoutRequired) return null;

  if (loaded) {
    return <DependentScripts />;
  }

  return <IndependentScripts />;
};

export default ScriptsForLayout;
