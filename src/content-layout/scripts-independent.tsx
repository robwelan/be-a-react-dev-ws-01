import React, { useEffect, useState } from 'react';
//  hooks
import useScript from '../hooks/use-script';
//  utlities
import getWindow from '../utilities/window/get-window';

const UseScript = () => {
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

  return <UseScript />;
};

export default IndependentScripts;
