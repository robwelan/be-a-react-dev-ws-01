import React, { lazy, Suspense } from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import LoadingScreen from '../../../../components/loading-screen';
//  local components
// import InfiniteScroll from './infinite-scroll';
//  state of be-a-react-dev
import { siteConfiguration } from '../../../../state';
//  lazy
const InfiniteScroll = lazy(() => import('./infinite-scroll'));

const Emojis = () => {
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;

  // return <InfiniteScroll isMobile={isMobile} />;

  return (
    <ErrorBoundary fallback={<Text>Emojis don't wanna...</Text>}>
      <Suspense fallback={<LoadingScreen />}>
        <InfiniteScroll />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Emojis;
