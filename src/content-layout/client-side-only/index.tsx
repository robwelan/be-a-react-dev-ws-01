import React from 'react';
import SetSiteConfiguration from './set-site-configuration';

type Props = {
  globalWindow: boolean;
};

const ClientSideOnly = (props: Props) => {
  const { globalWindow } = props;

  if (!globalWindow) return null;

  return (
    <>
      <SetSiteConfiguration />
    </>
  );
};

export default ClientSideOnly;
