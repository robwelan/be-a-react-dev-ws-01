import React from 'react';
//  chakra-ui
import {
  Heading,
  Link,
  List,
  ListItem,
  ListIcon,
  Text,
  VStack,
} from '@chakra-ui/react';
//  chakra-ui icons
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  react icons
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';

const MyProjects = () => (
  <VStack alignItems="flex-start" marginTop="4em" spacing={2} w="100%">
    <Heading as="h2" fontSize="125%">
      GatsbyJS Projects
    </Heading>
    <Text>
      The following are projects I have designed, developed, host and manage on
      behalf of clients.
    </Text>
    <List spacing={2}>
      <ListItem>
        <ListIcon as={FaGlobe} color="green.700" />
        <Link href="https://almuccienterprises.com/" isExternal>
          Al Mucci Enterprises <ExternalLinkIcon />
        </Link>
      </ListItem>

      <ListItem>
        <ListIcon as={FaGlobe} color="green.700" />
        <Link href="https://ipswicho2.com.au/" isExternal>
          Ipswich O2 <ExternalLinkIcon />
        </Link>
      </ListItem>

      <ListItem>
        <ListIcon as={FaGlobe} color="green.700" />
        <Link href="https://skillsetbuilding.com.au/" isExternal>
          Skill Set Building Pty Ltd <ExternalLinkIcon />
        </Link>
      </ListItem>

      <ListItem>
        <ListIcon as={FaGlobe} color="green.700" />
        <Link href="https://wealthier-you.com.au/" isExternal>
          Wealthier Y♀u <ExternalLinkIcon />
        </Link>
      </ListItem>
    </List>
  </VStack>
);

export default MyProjects;
