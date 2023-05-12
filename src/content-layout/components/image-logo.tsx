import React from 'react';
//  chakra-ui
import { Image, useColorMode } from '@chakra-ui/react';
//  image
import logoDark from '../../images/beareactdev_icon.svg';
import logoLight from '../../images/beareactdev_icon.svg';

const LogoImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      alt=""
      src={colorMode === 'light' ? logoLight : logoDark}
      sx={{ height: '40px' }}
    />
  );
};

export default LogoImage;
