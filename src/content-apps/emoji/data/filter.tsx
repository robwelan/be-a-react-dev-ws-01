import React, { useEffect } from 'react';
//  recoil
import { SetterOrUpdater, useSetRecoilState, useRecoilState } from 'recoil';
//  state
import { emojiDictionaryFilter } from '../state/atoms';
import { EmojiFilter } from '../state/types';

const DataFilter = () => {
  const [filter, setFilterState] = useRecoilState(emojiDictionaryFilter);
  console.log('filter', filter);
  return <></>;
};

export default DataFilter;
