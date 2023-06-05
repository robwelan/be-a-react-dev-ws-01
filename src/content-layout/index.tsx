import React, { useEffect } from 'react';
//  chakra-ui
import { useColorMode, useDisclosure } from '@chakra-ui/react';
//  react-scroll
import { animateScroll as scroll } from 'react-scroll';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import ContentListeners from './listeners';
//  local components
import Routes from '../security/routes';
import WrapRoutes from './wrap-routes';
//  hooks
import useDeviceSize from '../hooks/use-device-size';
import useScript from '../hooks/use-script';

type Props = {
  children: Children;
  location: Location;
};

const ContentLayout = (props: Props) => {
  const { children, location } = props;
  const { pathname } = location;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const device = useDeviceSize();

  useScript({
    async: true,
    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    type: 'application/javascript',
  });

  useScript({
    async: true,
    delay: {
      isDelay: true,
      timeout: 450,
    },
    innerHTML: `kofiWidgetOverlay.draw('beareactdev', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#00b9fe',
    'floating-chat.donateButton.text-color': '#fff'
  })`,
    type: 'application/javascript',
  });

  //  scroll to top when path changes effect
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
      offset: 0,
      smooth: true,
      spy: true,
    });
  }, [pathname]);

  const configuration = {
    color: {
      colorMode,
      toggleColorMode,
    },
    device,
    disclosure: {
      isOpen,
      onOpen,
      onClose,
    },
  };

  return (
    <>
      <ContentListeners />
      <WrapRoutes configuration={configuration}>
        {/* <Routes location={location} /> */}
        <>{children}</>
      </WrapRoutes>
    </>
  );
};

export default ContentLayout;
