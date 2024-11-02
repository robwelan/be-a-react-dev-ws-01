import React, { lazy } from 'react';
//  chakra-ui
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import LoadingScreen from '../../../components/loading-screen';
//  hooks
import useEmojisData from '../hooks/use-emojis-data';
//  lazy components
import Emojis from './emojis';
// const Emojis = lazy(() => import('./emojis'));
const Filtration = lazy(() => import('./filtration'));
//  recoil state
import { siteConfiguration } from '../../../state';

const ViewEmoji = () => {
  const state = useEmojisData();
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;
  const emojisProps = { ...state, isMobile };
  const filtrationProps = { filtered: state.filtered, ...state.length };

  if (state.length.all === 0) return <LoadingScreen />;

  if (isMobile) {
    return (
      <VStack>
        <Box>
          <Filtration {...filtrationProps} />
        </Box>
        <Box>
          <Emojis {...emojisProps} />
        </Box>
      </VStack>
    );
  }

  return (
    <Flex gap={4}>
      <Box w="70%">
        <Emojis {...emojisProps} />
      </Box>
      <Box w="30%" sx={{ position: 'relative' }}>
        <Filtration {...filtrationProps} />
      </Box>
    </Flex>
  );
};

export default ViewEmoji;
