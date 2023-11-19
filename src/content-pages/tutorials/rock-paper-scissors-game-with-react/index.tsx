import React from 'react';
//  chakra-ui
import { Box, Center, Heading, List, Text } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  react icons
import { RiGameLine } from 'react-icons/ri';
//  components
import ListItemWithLink from '../../../components/list-item-with-link';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Build a Rock Paper Scissors Game with React
      </Heading>
    </Center>
    <Box sx={{ height: '1em' }} />
    <Text>
      In this tutorial we will be building a working rock-paper-scissors game.
      We will be using TypeScript (which is really JavaScript with a typing
      overlay), and React.
    </Text>
    <Box sx={{ height: '1em' }} />
    <List>
      <ListItemWithLink
        icon={RiGameLine}
        label="Game State Rock Paper Scissors"
        route="/game-state-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Entry Rock Paper Scissors"
        route="/game-entry-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Heading Rock Paper Scissors"
        route="/game-view-game-heading-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Wrapper Rock Paper Scissors"
        route="/game-view-game-wrapper-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Play Heading Rock Paper Scissors"
        route="/game-view-play-heading-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Players Rock Paper Scissors"
        route="/game-view-players-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - User Rock Paper Scissors"
        route="/game-view-user-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Computer Rock Paper Scissors"
        route="/game-view-computer-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Results Rock Paper Scissors"
        route="/game-view-results-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game View - Game Controls Resets Rock Paper Scissors"
        route="/game-view-controlsresets-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Action - User Decision Rock Paper Scissors"
        route="/game-action-set-decision-user-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Action - Computer Decision Rock Paper Scissors"
        route="/game-action-set-decision-computer-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Action - Get Result Rock Paper Scissors"
        route="/game-action-get-result-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Action - Set Clear Game Rock Paper Scissors"
        route="/game-action-set-clear-game-rock-paper-scissors/"
      />
      <ListItemWithLink
        icon={RiGameLine}
        label="Game Action - Set Clear All Rock Paper Scissors"
        route="/game-action-set-clear-game-all-rock-paper-scissors/"
      />
    </List>
  </>
);

export default ContentTutorial;
