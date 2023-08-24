import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentGameRockPaperScissors from '../../content-games/rock-paper-scissors';
//  content-seo
import descriptionSeo from '../../content-games/rock-paper-scissors/seo/description';
//  hooks
import useDeviceSize from '../../hooks/use-device-size';

const PageGameRockPaperScissors = ({ location }) => {
  const device = useDeviceSize();

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
