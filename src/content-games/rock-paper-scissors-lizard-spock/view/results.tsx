import React from 'react';
//  chakra-ui
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const DisplayResults = (props: Props) => {
  const { state } = props;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}
    >
      <HStack>
        <Box p={4}>
          <VStack>
            <Text>Computer:</Text>
            <Text>{state.games.computer}</Text>
          </VStack>
        </Box>

        <Box p={4}>
          <VStack>
            <Text>Games:</Text>
            <Text>{state.games.total}</Text>
          </VStack>
        </Box>

        <Box p={4}>
          <VStack>
            <Text>User:</Text>
            <Text>{state.games.user}</Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default DisplayResults;
