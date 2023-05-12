import React from 'react';
//  chakra-ui
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
//  constants
import { Children, Location } from '../constants/types';
//  local components
import ContentListeners from './listeners';
//  theme
import theme from './theme';

type Props = {
  children: Children;
  location: Location;
};

const ContentProvider = (props: Props) => {
  const { children, location } = props;

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <ContentListeners location={location}>{children}</ContentListeners>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default ContentProvider;
