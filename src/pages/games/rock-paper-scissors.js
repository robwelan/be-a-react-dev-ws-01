import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentGameRockPaperScissors from '../../content-pages/games/rock-paper-scissors';
//  hooks
import useDeviceSize from '../../hooks/use-device-size';

const PageGameRockPaperScissors = ({ location }) => {
  const device = useDeviceSize();

  return <ContentGameRockPaperScissors device={device} location={location} />;
};

export default PageGameRockPaperScissors;

export const Head = ({ location }) => (
  <Seo location={location} title="Rock Paper Scissors" />
);
