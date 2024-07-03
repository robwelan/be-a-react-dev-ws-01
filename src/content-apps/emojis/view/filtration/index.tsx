import React, { lazy, Suspense } from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  components
import LoadingScreen from '../../../../components/loading-screen';
//  lazy
const Main = lazy(() => import('./main'));

const Filtration = () => (
  <ErrorBoundary fallback={<Text>Filtration View Error...</Text>}>
    <Suspense fallback={<LoadingScreen />}>
      <Main />
    </Suspense>
  </ErrorBoundary>
);

export default Filtration;
