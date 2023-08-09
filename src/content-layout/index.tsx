import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  useColorMode,
  useDisclosure,
  useTheme,
  useToken,
} from '@chakra-ui/react';
//  react-scroll
import { animateScroll as scroll } from 'react-scroll';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import ContentListeners from './listeners';
//  local components
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';
import MainLayout from './main-layout';
//  hooks
import useDeviceSize from '../hooks/use-device-size';
//  security
import { PUBLIC_ROUTE_PAGE_TIKTOKLINKS } from '../security/constants/routes-public';
//  utilities
import replaceAll from '../utilities/strings/replace-all';
import getWindow from '../utilities/window/get-window';
//  styles
import './index.css';
import './css/floating-label.css';

type Props = {
  children: Children;
  location: Location;
};

const ContentLayout = (props: Props) => {
  const { children, location } = props;
  const { pathname } = location;
  const [loaded, setIsLoaded] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const bgColorVar =
    theme.semanticTokens.colors['chakra-body-bg'][`_${colorMode}`];
  const bgColorToken = useToken('colors', [bgColorVar]);
  const device = useDeviceSize();
  const globalWindow = getWindow();

  const cleanPath = replaceAll({
    string: pathname,
    search: '/',
    replaceWith: '',
  });
  const cleanRouteTikTokLinks = replaceAll({
    string: PUBLIC_ROUTE_PAGE_TIKTOKLINKS,
    search: '/',
    replaceWith: '',
  });
  const isRouteTikTokLinks = cleanPath === cleanRouteTikTokLinks;

  //  mounted effect
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      if (globalWindow) {
        setTimeout(() => {
          setIsLoaded(true);
        }, 250);
      }
    }
  }, [globalWindow, mounted]);

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
      {loaded && !isRouteTikTokLinks && <DependentScripts />}
      {!loaded && !isRouteTikTokLinks && (
        <IndependentScripts bgColorToken={bgColorToken} />
      )}
      <MainLayout
        configuration={configuration}
        isRouteTikTokLinks={isRouteTikTokLinks}
      >
        {children}
      </MainLayout>
    </>
  );
};

export default ContentLayout;
