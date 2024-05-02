import React from 'react';
//  local components
import EmojiData from './data';
import ViewEmoji from './view';

//  lazy components
// const EmojiData = lazy(() => import('./data'));
// const ViewEmoji = lazy(() => import('./view'));

const ContentRecoilEmoji = () => {
  return (
    <>
      <EmojiData />
      <ViewEmoji />
    </>
  );
};

export default ContentRecoilEmoji;
