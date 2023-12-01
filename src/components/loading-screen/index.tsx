import React from 'react';
//  chakra-ui
import { Center, Spinner } from '@chakra-ui/react';

const LoadingScreen = () => (
  <Center h="calc(100vh - 75px)">
    <Spinner size="xl" speed="0.5s" thickness="4px" />
  </Center>
);

export default LoadingScreen;
