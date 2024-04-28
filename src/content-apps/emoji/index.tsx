import React, { lazy, Suspense } from 'react';
//  react error boundary
import { ErrorBoundary } from 'react-error-boundary';
//  components
import LoadingScreen from '../../components/loading-screen';
//  local components
// import EmojiData from './data';
import ViewEmoji from './view';

//  lazy components
const EmojiData = lazy(() => import('./data'));
// const ViewEmoji = lazy(() => import('./view'));

const ContentRecoilEmoji = () => {
  return (
    <>
      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<LoadingScreen />}>
          <EmojiData />
        </Suspense>
      </ErrorBoundary>
      <ViewEmoji />
    </>
  );
};

export default ContentRecoilEmoji;
