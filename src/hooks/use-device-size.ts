import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
//  utilities
import getWindow from '../utilities/window/get-window';
/*
  chakra ui breakpoints
  xs < 480px
  sm: '30em', 480px to 767px
  md: '48em', 768px to 991px
  lg: '62em', 992px to 1279px
  xl: '80em', 1280px to 1535px
  '2xl': '96em', > 1536px
*/
const useDeviceSize = () => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });
  const [
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isTwoExtraLarge,
  ] = useMediaQuery([
    '(max-width: 479px)',
    '(min-width: 480px) and (max-width: 767px)',
    '(min-width: 768px) and (max-width: 991px)',
    '(min-width: 992px) and (max-width: 1279px)',
    '(min-width: 1280px) and (max-width: 1535px)',
    '(min-width: 1536px)',
  ]);
  const windowGlobal = getWindow();
  const isMobile = isExtraSmall || isSmall;
  const isTablet = isMedium || isLarge;
  const isDesktop = isExtraLarge || isTwoExtraLarge;
  const containerType = `container.${isExtraSmall ? 'xs' : ''}${
    isSmall ? 'sm' : ''
  }${isMedium ? 'md' : ''}${isLarge ? 'lg' : ''}${isExtraLarge ? 'xl' : ''}${
    isTwoExtraLarge ? '2xl' : ''
  }`;

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize({
        height: windowGlobal ? window.innerHeight : 0,
        width: windowGlobal ? window.innerWidth : 0,
      });
    };

    if (windowGlobal) {
      window.addEventListener('resize', updateSize);
    }

    updateSize();

    return () => {
      if (windowGlobal) {
        window.removeEventListener('resize', updateSize);
      }
    };
  }, []);

  return {
    container: containerType,

    screen: {
      isExtraSmall,
      isSmall,
      isMedium,
      isLarge,
      isExtraLarge,
      isTwoExtraLarge,
    },

    type: {
      isDesktop,
      isMobile,
      isTablet,
    },
    window: windowSize,
  };
};

export default useDeviceSize;
