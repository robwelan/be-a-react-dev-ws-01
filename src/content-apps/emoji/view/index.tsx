import React, { lazy, Suspense } from 'react';
//  chakra-ui
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import LoadingScreen from '../../../components/loading-screen';
//  lazy components
// import Emojis from './emojis';
const Emojis = lazy(() => import('./emojis'));
const Filtration = lazy(() => import('./filtration'));
//  recoil state
import { siteConfiguration } from '../../../state';

const ViewEmoji = () => {
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;

  if (isMobile) {
    return (
      <VStack>
        <Box>top</Box>
        <Box>
          <Emojis />
        </Box>
      </VStack>
    );
  }

  return (
    <Flex gap={4}>
      <Box w="70%">
        <ErrorBoundary fallback={<Text>Emoji Dictionary is sad...</Text>}>
          <Suspense fallback={<LoadingScreen />}>
            <Emojis />
          </Suspense>
        </ErrorBoundary>
      </Box>
      <Box w="30%">
        <ErrorBoundary fallback={<Text>Filter is sad...</Text>}>
          <Suspense fallback={<LoadingScreen />}>
            <Filtration />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Flex>
  );
};

export default ViewEmoji;
