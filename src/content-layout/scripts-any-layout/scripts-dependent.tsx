import React, { useEffect, useState } from 'react';

type Props = {
  globalWindow: boolean;
};

const DependentScripts = (props: Props) => {
  const { globalWindow } = props;
  const [isWindow, setIsWindow] = useState(false);

  //  isWindow effect
  useEffect(() => {
    if (globalWindow) {
      setIsWindow(true);
    }

    return () => setIsWindow(false);
  }, [globalWindow]);

  if (!isWindow) return null;

  return <></>;
};

export default DependentScripts;
