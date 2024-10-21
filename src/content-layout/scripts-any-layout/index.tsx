import React from 'react';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';

type Props = {
  globalWindow: boolean;
  loaded: boolean;
};

const ScriptsAnyLayout = (props: Props) => {
  const { globalWindow, loaded } = props;

  if (loaded) {
    return <DependentScripts globalWindow={globalWindow} />;
  }

  return <IndependentScripts globalWindow={globalWindow} />;
};

export default ScriptsAnyLayout;
