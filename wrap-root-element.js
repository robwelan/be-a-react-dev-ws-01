import React from 'react';
import { Provider } from 'jotai';
//  chakra-ui
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
//  theme
import theme from './src/content-layout/theme';

const wrapRootElement = ({ element }) => (
  <Provider>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ChakraProvider>
  </Provider>
);

export default wrapRootElement;
