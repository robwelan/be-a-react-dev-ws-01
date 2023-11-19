import React from 'react';
//  chakra-ui
import {
  Box,
  Center,
  Heading,
  List,
  Text,
} from '@chakra-ui/react';
//  react icons
import { LuListTodo } from 'react-icons/lu';
import { RiGameLine } from 'react-icons/ri';
//  routes
import {
  PUBLIC_ROUTE_PAGE_TUTORIALS_APP_TODO,
  PUBLIC_ROUTE_PAGE_TUTORIALS_GAME_ROCK_PAPER_SCISSORS,
} from '../../security/constants/routes-public';
//  components
import ListItemWithLink from '../../components/list-item-with-link';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Tutorials at Be A React Dev
      </Heading>
    </Center>
    <Box sx={{ height: '1em' }} />
    <Text marginBottom="0.5em">
      Welcome to Be-A-React-Dev, your go-to destination for comprehensive
      tutorials in the dynamic realm of web development. Dive into the world of
      cutting-edge technologies such as GatsbyJS, ReactJS, TypeScript, and
      Recoil with our expertly crafted guides.
    </Text>
    <Text marginBottom="0.5em">
      Whether you're a seasoned developer looking to expand your skill set or a
      newcomer eager to embark on your coding journey, Be-A-React-Dev is here to
      empower you with in-depth tutorials, practical insights, and hands-on
      examples.
    </Text>
    <Text>
      Here at Be-A-React-Dev we aim to guide you through the intricacies of
      modern web development with more in-depth tutorials than you might find
      elsewhere to really help close gaps in knowledge.
    </Text>
    <Box sx={{ height: '1em' }} />
    <Heading as="h2" fontSize="110%">
      Our Tutorials
    </Heading>
    <Heading as="h3" fontSize="100%" marginTop="0.5em">
      Apps
    </Heading>
    <List>
      <ListItemWithLink
        icon={LuListTodo}
        label="Build a Todo App with React, Recoil and TypeScript"
        route={PUBLIC_ROUTE_PAGE_TUTORIALS_APP_TODO}
      />
    </List>
    <Heading as="h3" fontSize="100%" marginTop="0.5em">
      Games
    </Heading>
    <List>
      <ListItemWithLink
        icon={RiGameLine}
        label="Build a Rock Paper Scissors Game with React and TypeScript"
        route={PUBLIC_ROUTE_PAGE_TUTORIALS_GAME_ROCK_PAPER_SCISSORS}
      />
    </List>
  </>
);

export default ContentTutorial;
