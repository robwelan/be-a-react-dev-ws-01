import React from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';
//  types
import { Children, LayoutConfiguration } from '../constants/types';
//  local components
import ButtonScrollToTop from './components/scroll-to-top-button';
import MediumContainer from './components/container-medium';
import SmallContainer from './components/container-small';
import Navigator from './navigator-top';
import SideDrawer from './side-drawer';
import LayoutFooter from './footer';

type Props = {
  children: Children;
  configuration: LayoutConfiguration;
  isRouteTikTokLinks: boolean;
};

const MainLayout = (props: Props) => {
  const { children, configuration, isRouteTikTokLinks } = props;
  const { device, disclosure } = configuration;
  const { type } = device;
  const { isMobile } = type;
  const { isOpen, onOpen, onClose } = disclosure;

  if (isRouteTikTokLinks) {
    return <>{children}</>;
  }

  return (
    <>
      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box minH="100vh">
        <Navigator configuration={configuration} />
        {isMobile && <SmallContainer>{children}</SmallContainer>}
        {!isMobile && <MediumContainer>{children}</MediumContainer>}
      </Box>
      <LayoutFooter />
      <ButtonScrollToTop />
    </>
  );
};

export default MainLayout;
