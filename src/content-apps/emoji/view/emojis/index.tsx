import React from 'react';
//  recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
//  local components
import InfiniteScroll from './infinite-scroll';
//  local utilities
import getEmojis from '../../data/utilities/get-emojis';
import setEmojisFakeAPI from '../../data/utilities/set-emojis-fake-api';
//  recoil state
import {
  emojiDictionary,
  emojiFakeAPI,
  emojiDictionaryFilter,
} from '../../state/atoms';
import { siteConfiguration } from '../../../../state';

const Emojis = () => {
  const emojiData = useRecoilValue(emojiDictionary);
  const emojiDataFiltered = useRecoilValue(emojiDictionaryFilter);
  const setFakeAPIEmojis = useSetRecoilState(emojiFakeAPI);
  const { emojis: emojisCore } = emojiData;
  const { emojis: emojisFiltered, filtered } = emojiDataFiltered;
  const emojis = getEmojis({
    core: emojisCore,
    filtered: emojisFiltered,
    isFiltered: filtered,
  });
  setEmojisFakeAPI({ emojis, offset: 50, setState: setFakeAPIEmojis });
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;

  return <InfiniteScroll isMobile={isMobile} />;
};

export default Emojis;
