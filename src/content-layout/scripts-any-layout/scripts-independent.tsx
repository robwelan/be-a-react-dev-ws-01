import React, { useEffect, useState } from 'react';
//  hooks
import useScript from '../../hooks/use-script';

const UseScriptAnalytics = () => {
  useScript({
    async: true,
    crossOrigin: 'anonymous',
    head: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5658856130575482',
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
      <UseScriptAnalytics />
    </>
  );
};

export default IndependentScripts;
