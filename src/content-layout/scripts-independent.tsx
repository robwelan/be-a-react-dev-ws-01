import React, { useEffect, useState } from 'react';
//  hooks
import useScript from '../hooks/use-script';
//  utilities
import getWindow from '../utilities/window/get-window';

const UseScriptAnalytics = () => {
  useScript({
    async: true,
    crossOrigin: 'anonymous',
    head: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5658856130575482',
  });

  return <></>;
};

const UseScriptOverlay = () => {
  useScript({
    async: true,
    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    type: 'application/javascript',
  });

  return <></>;
};

const IndependentScripts = () => {
  const [isWindow, setIsWindow] = useState(false);
  const windowGlobal = getWindow();

  //  isWindow effect
  useEffect(() => {
    if (windowGlobal) {
      setIsWindow(true);
    }

    // return () => setIsWindow(false);
  }, [windowGlobal]);

  if (!isWindow) return null;

  return (
    <>
      <UseScriptAnalytics />
      <UseScriptOverlay />
    </>
  );
};

export default IndependentScripts;
