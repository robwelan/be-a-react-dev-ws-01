import { useEffect } from 'react';

interface Payload {
  async?: boolean;
  delay?: {
    isDelay?: boolean;
    timeout?: number;
  };
  head?: boolean;
  innerHTML?: string;
  src?: string;
  type?: string;
}

const useScript = (payload: Payload) => {
  const {
    async: isAsync = false,
    delay = {},
    head: isHead = false,
    innerHTML = '',
    src = '',
    type = '',
  } = payload;
  const { isDelay = false, timeout = 500 } = delay;
  //  url effect
  useEffect(() => {
    const script = document.createElement('script');
    const documentTag = isHead ? 'head' : 'body';

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

    if (isDelay) {
      setTimeout(() => {
        document[documentTag].appendChild(script);
      }, timeout);
    }

    if (!isDelay) {
      document[documentTag].appendChild(script);
    }

    return () => {
      document[documentTag].removeChild(script);
    };
  }, [isAsync, isHead, isDelay, innerHTML, src, timeout, type]);
};

export default useScript;
