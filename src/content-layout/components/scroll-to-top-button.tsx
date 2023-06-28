import React, { useEffect, useState } from 'react';
//  chakra-ui
import { IconButton } from '@chakra-ui/react';
//  react icons
import { FaArrowCircleUp } from '@react-icons/all-files/fa/FaArrowCircleUp';
//  constants
import colors from '../../constants/colors';
//  utiltities
import getWindow from '../../utilities/window/get-window';

const doScrollToTop = (payload) => {
  const { globalWindow } = payload;

  if (globalWindow) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const globalWindow = getWindow();

  useEffect(() => {
    if (globalWindow) {
      globalWindow.addEventListener('scroll', () => {
        if (globalWindow.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }
  }, [globalWindow]);

  return (
    <IconButton
      aria-label="scroll to top"
      className="button-scroll-to-top"
      colorScheme="cyan"
      fontSize="2em"
      icon={<FaArrowCircleUp />}
      onClick={() => doScrollToTop({ globalWindow })}
      sx={{ display: isVisible ? 'flex' : 'none' }}
      variant="outline"
    />
  );
};

export default ScrollToTop;
