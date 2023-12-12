import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  components
import Seo from '../../components/seo';
//  content
import ContentGameRockPaperScissors from '../../content-games/rock-paper-scissors';
//  content-seo
import descriptionSeo from '../../content-games/rock-paper-scissors/seo/description';
//  recoil state
import { siteConfiguration } from '../../state';

const PageGameRockPaperScissors = ({ location }) => {
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;

  return <ContentGameRockPaperScissors device={device} location={location} />;
};

export default PageGameRockPaperScissors;

export const Head = ({ location }) => (
  <Seo
    description={descriptionSeo}
    location={location}
    title="Rock Paper Scissors"
  />
);
