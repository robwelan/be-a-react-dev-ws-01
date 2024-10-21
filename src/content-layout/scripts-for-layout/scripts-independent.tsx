import React, { useEffect, useState } from 'react';
//  hooks
import useScript from '../../../hooks/use-script';

const UseScriptOverlay = () => {
  useScript({
    async: true,
    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    type: 'application/javascript',
  });

  return <></>;
};

type Props = {
  globalWindow: boolean;
};

const IndependentScripts = (props: Props) => {
  const { globalWindow } = props;
  const [isWindow, setIsWindow] = useState(false);

  //  isWindow effect
  useEffect(() => {
    if (globalWindow) {
      setIsWindow(true);
    }

    // return () => setIsWindow(false);
  }, [globalWindow]);

  if (!isWindow) return null;

  return (
    <>
      <UseScriptOverlay />
    </>
  );
};

export default IndependentScripts;
