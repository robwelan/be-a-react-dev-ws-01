import { useEffect } from 'react';

interface Url {
  async: boolean;
  innerHTML: string;
  src: string;
  type: string;
}

const useScript = (props: Url) => {
  const { async: isAsync = false, innerHTML = '', src = '', type = '' } = props;

  //  url effect
  useEffect(() => {
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

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [innerHTML, src]);
};

export default useScript;
