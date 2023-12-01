import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
//  components
import LoadingScreen from '../../components/loading-screen';
//  local components
const GeoLocation = lazy(() => import('./data/geo-location'));

const queryClient = new QueryClient();

const Content = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingScreen />}>
          <GeoLocation />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Content;
