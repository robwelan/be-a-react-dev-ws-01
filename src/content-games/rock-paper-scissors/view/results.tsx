import React from 'react';
//  chakra-ui
import { HStack, VStack, Text } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const DisplayResults = (props: Props) => {
  const { state } = props;

  return (
    <HStack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}
    >
      <VStack p={4}>
        <Text>Computer:</Text>
        <Text>{state.games.computer}</Text>
      </VStack>

      <VStack p={4}>
        <Text>Games:</Text>
        <Text>{state.games.total}</Text>
      </VStack>

      <VStack p={4}>
        <Text>User:</Text>
        <Text>{state.games.user}</Text>
      </VStack>
    </HStack>
  );
};

export default DisplayResults;
