import { useEffect } from 'react';
//  utilities
import getWindow from '../utilities/window/get-window';

interface Payload {
  async?: boolean;
  dependenciesLoaded?: boolean;
  head?: boolean;
  innerHTML?: string;
  src?: string;
  type?: string;
}

const useScript = (payload: Payload) => {
  const {
    async: isAsync = false,
    head: isHead = false,
    innerHTML = '',
    src = '',
    type = '',
  } = payload;
  const globalWindow = getWindow();

  //  url effect
  useEffect(() => {
    const documentTag = isHead ? 'head' : 'body';
    const script = globalWindow.document.createElement('script');

    if (!globalWindow) return () => {};

    if (!globalWindow.document) return () => {};

    if (isAsync) {
      script.async = true;
    }
    if (innerHTML !== '') {
      script.innerHTML = innerHTML;
    }
    if (src !== '') {
      script.src = src;
    }
    if (type !== '') {
      script.type = type;
    }

    globalWindow.document[documentTag].appendChild(script);

    return () => {
      globalWindow.document[documentTag].removeChild(script);
    };
  }, [globalWindow]);
};

export default useScript;
