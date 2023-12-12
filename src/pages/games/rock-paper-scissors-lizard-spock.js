import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import Seo from '../../components/seo';
//  content
import ContentGameRockPaperScissorsLizardSpock from '../../content-games/rock-paper-scissors-lizard-spock';
//  content-seo
import descriptionSeo from '../../content-games/rock-paper-scissors-lizard-spock/seo/description';
//  recoil state
import { siteConfiguration } from '../../state';

const PageGameRockPaperScissorsLizardSpock = ({ location }) => {
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;

  return (
    <ContentGameRockPaperScissorsLizardSpock
      device={device}
      location={location}
    />
  );
};

export default PageGameRockPaperScissorsLizardSpock;

export const Head = ({ location }) => (
  <Seo
    description={descriptionSeo}
    location={location}
    title="Rock Paper Scissors Lizard Spock"
  />
);
