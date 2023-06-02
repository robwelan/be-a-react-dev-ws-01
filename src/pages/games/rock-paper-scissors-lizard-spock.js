import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentGameRockPaperScissorsLizardSpock from '../../content-games/rock-paper-scissors-lizard-spock';
//  hooks
import useDeviceSize from '../../hooks/use-device-size';

const PageGameRockPaperScissorsLizardSpock = ({ location }) => {
  const device = useDeviceSize();

  return (
    <ContentGameRockPaperScissorsLizardSpock
      device={device}
      location={location}
    />
  );
};

export default PageGameRockPaperScissorsLizardSpock;

export const Head = ({ location }) => (
  <Seo location={location} title="Rock Paper Scissors Lizard Spock" />
);
