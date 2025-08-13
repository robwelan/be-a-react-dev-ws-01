import React from 'react';
//  chakra-ui
import { Box, Center, Heading, List, Text } from '@chakra-ui/react';
//  react icons
import { FaTiktok } from 'react-icons/fa6';
//  components
import ListItemWithLink from '../../../components/list-item-with-link';
import LinkToTutorials from '../components/link-to-tutorials';
//  security routes
import { PUBLIC_ROUTE_PAGE_BLOG } from '../../../security/constants/routes-public';

const ContentTutorial = () => (
  <>
    <Center>
      <Heading as="h1" fontSize="140%">
        Build a Tik Tok Page with Chakra-UI and React
      </Heading>
    </Center>
    <Box sx={{ height: '1em' }} />
    <Text>
      Use Chakra-UI to make a useful Bio Page for your Tik Tok Profile.
    </Text>
    <Box sx={{ height: '1em' }} />
    <List>
      <ListItemWithLink
        icon={FaTiktok}
        label="Build a Tik Tok Bio Page"
        route={`${PUBLIC_ROUTE_PAGE_BLOG}/build-a-tik-tok-bio-in-chakra-ui-for-react/`}
      />
    </List>
    <LinkToTutorials />
  </>
);

export default ContentTutorial;
