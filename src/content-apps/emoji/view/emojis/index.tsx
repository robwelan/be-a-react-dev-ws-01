import React from 'react';
//  chakra-ui
import { Grid } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import ViewEmoji from '../emoji';
//  local utilities
import getEmojis from './get-emojis';
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

  if (isMobile) {
    return <p>emoji</p>;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {emojis.map((emoji, index) => (
        <Grid key={index}>
          <ViewEmoji emoji={emoji} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Emojis;
