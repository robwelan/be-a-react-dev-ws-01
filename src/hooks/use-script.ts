import { useEffect } from 'react';

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

  //  url effect
  useEffect(() => {
    const documentTag = isHead ? 'head' : 'body';
    const script = document.createElement('script');

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

    document[documentTag].appendChild(script);

    return () => {
      document[documentTag].removeChild(script);
    };
  }, []);
};

export default useScript;
