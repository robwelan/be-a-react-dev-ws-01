import React from 'react';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';

type Props = {
  loaded: boolean;
};

const ScriptsAnyLayout = (props: Props) => {
  const { loaded } = props;

  if (loaded) {
    return <DependentScripts />;
  }

  return <IndependentScripts />;
};

export default ScriptsAnyLayout;
