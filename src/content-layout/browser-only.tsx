import React from 'react';
//  hooks
import useSiteConfiguration from '../hooks/use-site-configuration';

const BrowserOnly = () => {
  useSiteConfiguration();

  return <></>;
};

export default BrowserOnly;
