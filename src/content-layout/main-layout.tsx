import React from 'react';
//  chakra ui
import { Box } from '@chakra-ui/react';
//  types
import { Children, LayoutConfiguration } from '../constants/types';
//  local components
import MediumContainer from './components/container-medium';
import SmallContainer from './components/container-small';
import Navigator from './navigator-top';
import SideDrawer from './side-drawer';
import LayoutFooter from './footer';

type Props = {
  children: Children;
  configuration: LayoutConfiguration;
};

const MainLayout = (props: Props) => {
  const { children, configuration } = props;
  const { device, disclosure } = configuration;
  const { type } = device;
  const { isMobile } = type;
  const { isOpen, onOpen, onClose } = disclosure;

  return (
    <>
      <Box minH="100vh">
        <Navigator configuration={configuration} />
        <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        {isMobile && <SmallContainer>{children}</SmallContainer>}
        {!isMobile && <MediumContainer>{children}</MediumContainer>}
      </Box>
      <LayoutFooter />
    </>
  );
};

export default MainLayout;
