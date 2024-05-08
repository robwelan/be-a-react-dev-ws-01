import React from 'react';
//  local components
import DataEmoji from './data';
import ViewEmoji from './view';

//  lazy components
// const EmojiData = lazy(() => import('./data'));
// const ViewEmoji = lazy(() => import('./view'));

const ContentRecoilEmoji = () => {
  return (
    <>
      <DataEmoji />
      <ViewEmoji />
    </>
  );
};

export default ContentRecoilEmoji;
