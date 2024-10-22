import React from 'react';
//  chakra-ui
import { Box, useDisclosure } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  types
import { Children } from '../constants/types';
//  components
import LoadingScreen from '../components/loading-screen';
//  local components
import ButtonScrollToTop from './components/scroll-to-top-button';
import MediumContainer from './components/container-medium';
import SmallContainer from './components/container-small';
import Navigator from './navigator-top';
import SideDrawer from './side-drawer';
import LayoutFooter from './footer';
//  recoil state
import { siteConfiguration } from '../state';

type Props = {
  children: Children;
  isLayoutRequired: boolean;
};

const MainLayout = (props: Props) => {
  const { children, isLayoutRequired } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const configuration = useRecoilValue(siteConfiguration);
  const { device, loaded } = configuration;
  const { type } = device;
  const { isMobile } = type;

  if (!loaded) return <LoadingScreen />;

  if (isLayoutRequired) {
    return (
      <>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box minH="100vh">
          <Navigator onOpen={onOpen} />
          {isMobile && <SmallContainer>{children}</SmallContainer>}
          {!isMobile && <MediumContainer>{children}</MediumContainer>}
        </Box>
        <LayoutFooter />
        <ButtonScrollToTop />
      </>
    );
  }

  return <>{children}</>;
};

export default MainLayout;
