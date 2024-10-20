import React, { useEffect, useState } from 'react';
//  react-scroll
import { animateScroll as scroll } from 'react-scroll';
//  recoil
import { useRecoilValue } from 'recoil';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import BrowserOnly from './browser-only';
import DependentScripts from './scripts-dependent';
import IndependentScripts from './scripts-independent';
import MainLayout from './main-layout';
import StyledComponent from './styled-component';
//  security
import {
  PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_TIKTOKBIO,
} from '../security/constants/routes-public';
//  state
import { fontSizeState } from '../state';
//  utilities
import replaceAll from '../utilities/strings/replace-all';
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
  const globalWindow = getWindow();

  const cleanPath = replaceAll({
    string: pathname,
    search: '/',
    replaceWith: '',
  });
  const cleanRouteFelonyChargesDJT = replaceAll({
    string: PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
    search: '/',
    replaceWith: '',
  });
  const cleanRouteTikTokLinks = replaceAll({
    string: PUBLIC_ROUTE_PAGE_TIKTOKBIO,
    search: '/',
    replaceWith: '',
  });
  const isRouteFelonyChargesDJT = cleanPath === cleanRouteFelonyChargesDJT;
  const isRouteTikTokLinks = cleanPath === cleanRouteTikTokLinks;
  const fontSize = useRecoilValue(fontSizeState);
  const isLayoutRequired = !isRouteFelonyChargesDJT && !isRouteTikTokLinks;

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
      {loaded && isLayoutRequired && <DependentScripts />}
      {!loaded && isLayoutRequired && <IndependentScripts />}
      {globalWindow && <BrowserOnly />}
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
