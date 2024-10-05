import React from 'react';
//  chakra-u
import { Grid } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  cards
import apps from './cards/apps';
import games from './cards/games';
import tutorials from './cards/tutorials';
//  local components
import ContentCard from './card';
//  recoil state
import { siteConfiguration } from '../../state';

const ContentHome = () => {
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const { type } = device;
  const { isMobile } = type;
  const templateColumns = isMobile ? 1 : 3;
  const cards = [apps, games, tutorials];

  return (
    <Grid
      alignItems="stretch"
      gridAutoRows="auto"
      templateColumns={`repeat(${templateColumns}, 1fr)`}
    >
      {cards.map((item, index) => (
        <ContentCard key={index} {...item} />
      ))}
    </Grid>
  );
};

export default ContentHome;
