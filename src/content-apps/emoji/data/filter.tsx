import React, { useEffect } from 'react';
//  recoil
import { SetterOrUpdater, useSetRecoilState, useRecoilState } from 'recoil';
//  state
import { emojiDictionaryFilter } from '../state/atoms';
import { EmojiFilter } from '../state/types';
//  local utilities
import getFilteredValue from './utilities/filter/get-filtered-value';

const DataFilter = () => {
  const [filter, setFilterState] = useRecoilState(emojiDictionaryFilter);
  const { filtered, input, group, subgroup } = filter;

  //  filtered effect
  useEffect(() => {
    const newFiltered = getFilteredValue({ input, group, subgroup });

    setFilterState((prevState) => ({
      ...prevState,
      filtered: newFiltered,
    }));
  }, [input, group, subgroup]);

  return <></>;
};

export default DataFilter;
