import React from 'react';
//  chakra-ui
import { useColorMode, useDisclosure } from '@chakra-ui/react';
//  hooks
import useDeviceSize from '../../hooks/use-device-size';
//  local components
import Routes from '../../security/routes';
import WrapRoutes from '../wrap-routes';
//  types
import { Children, Location } from '../../constants/types';

type Props = {
  children: Children;
  location: Location;
};

const ContentListeners = (props: Props) => {
  const { children, location } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const device = useDeviceSize();

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
      <WrapRoutes configuration={configuration}>
        <Routes location={location}>{children}</Routes>
      </WrapRoutes>
    </>
  );
};

export default ContentListeners;
