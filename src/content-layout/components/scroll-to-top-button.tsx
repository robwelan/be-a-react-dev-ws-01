import React, { useEffect, useState } from 'react';
//  chakra-ui
import { IconButton } from '@chakra-ui/react';
//  react icons
import { FaArrowCircleUp } from '@react-icons/all-files/fa/FaArrowCircleUp';
//  utiltities
import getWindow from '../../utilities/window/get-window';

type TypeDoScrollToTopPayload = {
  globalWindow: {
    scrollTo: Function;       
  };
};

const doScrollToTop = (payload: TypeDoScrollToTopPayload) => {
  const { globalWindow } = payload;

  if (globalWindow) {
    globalWindow.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const globalWindow = getWindow();

  useEffect(() => {
    let listener = () => {};

    if (globalWindow) {
      listener = () => {
        if (globalWindow.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      globalWindow.addEventListener('scroll', listener, true);
    }

    return () => {
      if (globalWindow) {
        globalWindow.removeEventListener('scroll', listener, true);
      }
    };
  }, [globalWindow]);

  return (
    <IconButton
      aria-label="scroll to top"
      colorScheme="cyan"
      fontSize="2em"
      icon={<FaArrowCircleUp />}
      onClick={() => doScrollToTop({ globalWindow })}
      sx={{
        display: isVisible ? 'flex' : 'none',
        cursor: 'pointer',
        position: 'fixed',
        bottom: '1.4rem',
        right: '1.4rem',
        zIndex: 1000,
      }}
      variant="outline"
    />
  );
};

export default ScrollToTop;
