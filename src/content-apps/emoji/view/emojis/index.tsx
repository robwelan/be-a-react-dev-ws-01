import React from 'react';
//  chakra-ui
import { Grid } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import ViewEmoji from '../emoji';
//  recoil state
import { siteConfiguration } from '../../../../state';
import { emojiDictionary } from '../../state/atoms';

const Emojis = () => {
  const emojiList = useRecoilValue(emojiDictionary);
  const { emojis } = emojiList;
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;
  const { processed } = emojiList;

  if (!processed) {
    return null;
  }

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
