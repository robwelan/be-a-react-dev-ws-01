import React, { FC, useMemo, useState } from 'react';
//  local state
import getCollections from './state';

//  local components
import ListJobApplications from './components/list';

const ContentJobApplicationTracker: FC = () => {
  const collections = useMemo(
    () => typeof window !== 'undefined' && getCollections(),
    [],
  );

  return (
    <>
      <ListJobApplications />
    </>
  );
};

export default ContentJobApplicationTracker;
