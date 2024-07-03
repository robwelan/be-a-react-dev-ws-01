import React from 'react';
//  local components
import IsFiltered from './is-filtered';
import FilteredEmojis from './filtered-emojis';

const Filter = () => {
  return (
    <>
      <IsFiltered />
      <FilteredEmojis />
    </>
  );
};

export default Filter;
