import React from 'react';
//  chakra-ui
import { Box, Center, Heading, Link, List, Text } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  react icons
import { LuListTodo } from 'react-icons/lu';
//  components
import ListItemWithLink from '../../../components/list-item-with-link';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Build a ToDo App with React, Recoil and TypeScript
      </Heading>
    </Center>
    <Box sx={{ height: '1em' }} />
    <Text>
      Use Gatsby, React, Recoil, TypeScript, and uuid to produce a seamless and
      robust task management solution.
    </Text>
    <Box sx={{ height: '1em' }} />
    <List>
      <ListItemWithLink
        icon={LuListTodo}
        label="Building a Todo Application Index File with TypeScript, ReactJS,
          Recoil, and Chakra-UI"
        route="/todo-building-a-todo-application-index-file-with-typescript-reactjs-recoil-and-chakra-ui/"
      />
      <ListItemWithLink
        icon={LuListTodo}
        label="Building a Todo Application State With Recoil and TypeScript"
        route="/todo-let-us-look-at-the-recoil-state/"
      />
      <ListItemWithLink
        icon={LuListTodo}
        label="Building Out The Actions In A ToDo App"
        route="/todo-actions/"
      />
      <ListItemWithLink
        icon={LuListTodo}
        label="Building Out The Actions In Detail In A ToDo App"
        route="/todo-actions-in-detail/"
      />
      <ListItemWithLink
        icon={LuListTodo}
        label="Building the Todo View Components with TypeScript, ReactJS, Recoil,
          and Chakra-UI"
        route="/todo-view-components-in-detail/"
      />
    </List>
  </>
);

export default ContentTutorial;
