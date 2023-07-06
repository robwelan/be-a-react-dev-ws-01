import React from 'react';
import { RecoilRoot } from 'recoil';
//  chakra-ui
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
//  theme
import theme from './src/@chakra-ui/gatsby-plugin/theme';

const wrapRootElement = ({ element }) => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ChakraProvider>
  </RecoilRoot>
);

export default wrapRootElement;
