import React, { useEffect, useState } from 'react';
//  react-scroll
import { animateScroll as scroll } from 'react-scroll';
//  recoil
import { useRecoilValue } from 'recoil';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import ClientSideOnly from './client-side-only';
import ScriptsAnyLayout from './scripts-any-layout';
import ScriptsForLayout from './scripts-for-layout';
import MainLayout from './main-layout';
import StyledComponent from './styled-component';
//  hooks
import useIsLayoutRequired from './hooks/use-is-layout-required';
//  state
import { fontSizeState } from '../state';
//  utilities
import getWindow from '../utilities/window/get-window';
// //  styles
// import './index.css';
// import './css/floating-label.css';

const NUMBER_BASE_FONT_SIZE = 1;

type Props = {
  children: Children;
  location: Location;
};

const ContentLayout = (props: Props) => {
  const { children, location } = props;
  const { pathname } = location;
  const [loaded, setIsLoaded] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const isLayoutRequired = useIsLayoutRequired({ pathname });
  const globalWindow = getWindow();
  const fontSize = useRecoilValue(fontSizeState);

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

  return (
    <>
      <ClientSideOnly globalWindow={globalWindow} />
      <ScriptsAnyLayout globalWindow={globalWindow} loaded={loaded} />
      <ScriptsForLayout
        globalWindow={globalWindow}
        isLayoutRequired={isLayoutRequired}
        loaded={loaded}
      />
      <StyledComponent
        fontSize={`${fontSize}rem`}
        scale={`${fontSize / NUMBER_BASE_FONT_SIZE}`}
      >
        <MainLayout isLayoutRequired={isLayoutRequired}>{children}</MainLayout>
      </StyledComponent>
    </>
  );
};

export default ContentLayout;
