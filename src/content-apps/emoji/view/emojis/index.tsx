import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import InfiniteScroll from './infinite-scroll';
//  local utilities
import getEmojis from '../../data/utilities/get-emojis';
//  recoil state
import { emojiDictionary, emojiDictionaryFilter } from '../../state/atoms';
import { siteConfiguration } from '../../../../state';

const Emojis = () => {
  const emojiData = useRecoilValue(emojiDictionary);
  const emojiDataFiltered = useRecoilValue(emojiDictionaryFilter);
  const { emojis: emojisCore } = emojiData;
  const { emojis: emojisFiltered, filtered } = emojiDataFiltered;
  const emojis = getEmojis({
    core: emojisCore,
    filtered: emojisFiltered,
    isFiltered: filtered,
  });
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;

  return <InfiniteScroll emojis={emojis} isMobile={isMobile} />;
};

export default Emojis;
