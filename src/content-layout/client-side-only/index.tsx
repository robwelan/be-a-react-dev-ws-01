import React from 'react';
import SetSiteConfiguration from './set-site-configuration';
import ScriptsAnyLayout from './scripts-any-layout';
import ScriptsForLayout from './scripts-for-layout';

type Props = {
  globalWindow: boolean;
  isLayoutRequired: boolean;
  loaded: boolean;
};

const ClientSideOnly = (props: Props) => {
  const { globalWindow, isLayoutRequired, loaded } = props;

  if (!globalWindow) return null;

  return (
    <>
      <SetSiteConfiguration />
      <ScriptsAnyLayout loaded={loaded} />
      <ScriptsForLayout isLayoutRequired={isLayoutRequired} loaded={loaded} />
    </>
  );
};

export default ClientSideOnly;
