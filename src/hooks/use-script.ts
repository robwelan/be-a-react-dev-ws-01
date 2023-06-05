import { useEffect } from 'react';

interface Url {
  innerHTML: string;
  src: string;
  type: string;
}

const useScript = (props: Url) => {
  const { innerHTML = '', src = '', type = '' } = props;

  //  url effect
  useEffect(() => {
    const script = document.createElement('script');

    script.async = true;
    script.innerHTML = innerHTML;
    script.src = src;
    script.type = type;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [innerHTML, src]);
};

export default useScript;
