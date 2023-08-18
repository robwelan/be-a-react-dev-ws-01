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
import { FaCodepen } from '@react-icons/all-files/fa/FaCodepen';

const MyCodePens = () => (
  <VStack alignItems="flex-start" marginTop="4em" spacing={2} w="100%">
    <Heading as="h2" size="sm">
      CodePens
    </Heading>
    <Text>The following are little scratchings of mine.</Text>
    <List spacing={2}>
      <ListItem>
        <ListIcon as={FaCodepen} />
        <Link href="https://codepen.io/robwelan/full/NoQZRy" isExternal>
          Responsive Clock Built in React <ExternalLinkIcon />
        </Link>
      </ListItem>

      <ListItem>
        <ListIcon as={FaCodepen} />
        <Link href="https://codepen.io/robwelan/full/OORRGE" isExternal>
          Calculator with VueJS <ExternalLinkIcon />
        </Link>
      </ListItem>

      <ListItem>
        <ListIcon as={FaCodepen} />
        <Link href="https://codepen.io/robwelan/full/XVWwEg" isExternal>
          Retro Batman <ExternalLinkIcon />
        </Link>
      </ListItem>
    </List>
  </VStack>
);

export default MyCodePens;
