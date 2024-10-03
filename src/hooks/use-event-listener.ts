import { useEffect, useState } from 'react';
//  utilities
import getWindow from '../utilities/window/get-window';

type Payload = {
  type: string;
  callback: Function;
};

type Event = {
  key?: string;
  keyCode?: string;
  which?: string;
};

const useEventListener = (payload: Payload) => {
  const { type, callback } = payload;
  const [mounted, setMounted] = useState(false);
  const windowGlobal = getWindow();

  const shimCallback = (event: Event) => {
    const { key, keyCode, which } = event;
    const code = key || keyCode || which;

    callback({ code, event });
  };

  //  mounted effect
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      windowGlobal.document.addEventListener(type, shimCallback, true);
    }

    return () => {
      windowGlobal.document.removeEventListener(type, shimCallback, true);
    };
  }, [mounted]);
};

export default useEventListener;
