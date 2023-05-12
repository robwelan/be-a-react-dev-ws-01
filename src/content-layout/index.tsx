import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import ContentProvider from './provider';
//  styles
import './index.css';

type Props = {
  children: Children;
  location: Location;
};

const ContentLayout = (props: Props) => {
  const { children, location } = props;
  const { pathname } = location;

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
      <ContentProvider location={location}>{children}</ContentProvider>
    </>
  );
};

export default ContentLayout;
