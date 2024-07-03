import React, { lazy, Suspense } from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  components
import LoadingScreen from '../../../../components/loading-screen';
//  recoil state
import { emojiFakeAPI } from '../../state/atoms';
//  lazy
const InfiniteScroll = lazy(() => import('./infinite-scroll'));

const Emojis = () => {
  const { emojis, length, loading, processed } = useRecoilValue(emojiFakeAPI);

  if (!processed) return <LoadingScreen />;

  return (
    <ErrorBoundary fallback={<Text>Emojis don't wanna...</Text>}>
      <Suspense fallback={<LoadingScreen />}>
        {loading && <LoadingScreen />}
        {!loading && <InfiniteScroll emojis={emojis} length={length} />}
      </Suspense>
    </ErrorBoundary>
  );
};

export default Emojis;
