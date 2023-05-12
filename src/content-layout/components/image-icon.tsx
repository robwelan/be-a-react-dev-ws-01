import React from 'react';
//  chakra-ui
import { Image, useColorMode } from '@chakra-ui/react';
//  image
import iconDark from '../../images/beareactdev_icon.svg';
import iconLight from '../../images/beareactdev_icon.svg';

const LogoImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      alt=""
      src={colorMode === 'light' ? iconLight : iconDark}
      sx={{ height: '40px' }}
    />
  );
};

export default LogoImage;
