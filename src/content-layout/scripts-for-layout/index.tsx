import React from 'react';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';

type Props = {
  globalWindow: boolean;
  isLayoutRequired: boolean;
  loaded: boolean;
};

const ScriptsForLayout = (props: Props) => {
  const { globalWindow, isLayoutRequired, loaded } = props;

  if (!isLayoutRequired) return null;

  if (loaded) {
    return <DependentScripts globalWindow={globalWindow} />;
  }

  return <IndependentScripts globalWindow={globalWindow} />;
};

export default ScriptsForLayout;
