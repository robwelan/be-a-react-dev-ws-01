import React, { lazy, Suspense } from 'react';
import { Text } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//  components
import LoadingScreen from '../../components/loading-screen';
//  local components
const GeoLocation = lazy(() => import('./data/geo-location'));

const queryClient = new QueryClient();

const Content = () => {
  return (
    <ErrorBoundary fallback={<Text>Something went wrong</Text>}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingScreen />}>
          <GeoLocation />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Content;
