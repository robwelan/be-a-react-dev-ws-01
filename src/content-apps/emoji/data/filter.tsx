import React, { useEffect } from 'react';
//  recoil
import { SetterOrUpdater, useRecoilValue, useRecoilState } from 'recoil';
//  state
import { emojiDictionary, emojiDictionaryFilter } from '../state/atoms';
import { EmojiFilter } from '../state/types';
//  local utilities
import getFilteredEmojis from './utilities/filter/get-filtered-emojis';
import getFilteredValue from './utilities/filter/get-filtered-value';

const DataFilter = () => {
  const dictionary = useRecoilValue(emojiDictionary);
  const { emojis, processed } = dictionary;
  const [filter, setFilterState] = useRecoilState(emojiDictionaryFilter);
  const { filtered, input, group, subgroup } = filter;

  //  filtered effect
  useEffect(() => {
    if (filtered && processed) {
      const filteredEmojis = getFilteredEmojis({
        emojis,
        filtered,
        filters: { input, group, subgroup },
      });

      setFilterState((prevState) => ({
        ...prevState,
        emojis: filteredEmojis,
      }));
    }

    if (!filtered && processed) {
      setFilterState((prevState) => ({
        ...prevState,
        emojis: [],
      }));
    }
  }, [filtered, input, group, processed, subgroup]);

  //  get filtered value effect
  useEffect(() => {
    if (processed) {
      const filteredValue = getFilteredValue({ input, group, subgroup });

      setFilterState((prevState) => ({
        ...prevState,
        filtered: filteredValue,
      }));
    }
  }, [input, group, processed, subgroup]);

  console.log('filter', filter);
  return <></>;
};

export default DataFilter;
