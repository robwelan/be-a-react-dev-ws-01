import React from 'react';
//  chakra-ui
import { Box, Center, Heading, List, Text } from '@chakra-ui/react';
//  react icons
import { FaRegHandScissors } from 'react-icons/fa';
//  components
import ListItemWithLink from '../../../components/list-item-with-link';
import LinkToTutorials from '../components/link-to-tutorials';
//  security routes
import { PUBLIC_ROUTE_PAGE_BLOG } from '../../../security/constants/routes-public';

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
        icon={FaRegHandScissors}
        label="Game State Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-state-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Entry Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-entry-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Heading Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-game-heading-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Wrapper Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-game-wrapper-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Play Heading Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-play-heading-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Players Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-players-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - User Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-user-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Computer Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-computer-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Results Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-results-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game View - Game Controls Resets Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-view-controlsresets-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Action - User Decision Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-action-set-decision-user-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Action - Computer Decision Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-action-set-decision-computer-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Action - Get Result Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-action-get-result-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Action - Set Clear Game Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-action-set-clear-game-rock-paper-scissors/`}
      />
      <ListItemWithLink
        icon={FaRegHandScissors}
        label="Game Action - Set Clear All Rock Paper Scissors"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/game-action-set-clear-game-all-rock-paper-scissors/`}
      />
    </List>
    <LinkToTutorials />
  </>
);

export default ContentTutorial;
