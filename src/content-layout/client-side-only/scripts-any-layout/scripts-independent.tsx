import React from 'react';
//  hooks
import useScript from '../../../hooks/use-script';

const UseScriptAnalytics = () => {
  useScript({
    async: true,
    crossOrigin: 'anonymous',
    head: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5658856130575482',
  });

  return <></>;
};

const IndependentScripts = () => (
  <>
    <UseScriptAnalytics />
  </>
);

export default IndependentScripts;
