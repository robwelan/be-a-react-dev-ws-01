import React from 'react';
import { Box, Card, CardBody, Center, Spinner } from '@chakra-ui/react';
//  types
import { TypeEmoji } from '../../state/types';

type Payload = {
  emoji: TypeEmoji;
};

const ViewEmojiLoading = () => (
  <Box height="100%" width="100%" p={4}>
    <Card border="1px solid" borderColor="gray.200" shadow="none" h="100%">
      <CardBody>
        <Center>
          <Spinner size="xl" speed="0.5s" thickness="4px" />
        </Center>
      </CardBody>
    </Card>
  </Box>
);

export default ViewEmojiLoading;
