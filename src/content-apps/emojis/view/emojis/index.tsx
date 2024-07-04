import React, { lazy, Suspense } from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  components
import LoadingScreen from '../../../../components/loading-screen';
//  recoil types
import { TypeArrayOfEmojis } from '../../state/types';

//  lazy
const InfiniteScroll = lazy(() => import('./infinite-scroll'));

type EmojisProps = {
  emojis: TypeArrayOfEmojis;
  filtered: boolean;
  isMobile: boolean;
  length: {
    all: number;
    display: number;
  };
};

const Emojis = (props: EmojisProps) => (
  <ErrorBoundary fallback={<Text>Emojis don't wanna...</Text>}>
    <Suspense fallback={<LoadingScreen />}>
      <InfiniteScroll {...props} />
    </Suspense>
  </ErrorBoundary>
);

export default Emojis;
