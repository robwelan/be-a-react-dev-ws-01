import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Inspiration = () => (
  <>
    <Box flex={1} marginTop="2em">
      <Heading as="h2" fontSize="120%">
        Inspiration
      </Heading>
      <Text>
        I built this for fun because{' '}
        <Link href="https://twitter.com/gtconway3d" isExternal>
          <strong>George Conway</strong> (@gtconway3d){' '}
          <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        mentioned{' '}
        <Link
          href="https://twitter.com/gtconway3d/status/1697935627575067091"
          isExternal
        >
          <strong>this</strong> <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        on X (as a joke presumably).
      </Text>
      <Text>That was all the inspiration I needed.</Text>
      <Text>
        You can purchase a video by clicking{' '}
        <Link href="https://ko-fi.com/s/5c55bdbcc5" isExternal>
          <strong>here</strong> <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        if you want.
      </Text>
      <Text>
        I believe video files can be made into a screen saver on most operating
        systems somehow.
      </Text>
    </Box>
  </>
);

export default Inspiration;
