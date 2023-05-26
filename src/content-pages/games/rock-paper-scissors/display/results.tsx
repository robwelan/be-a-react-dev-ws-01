import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//  interfaces
import { State } from '../interfaces';

interface Props {
  state: State;
}

const DisplayResults = (props: Props) => {
  const { state } = props;
  const { result } = state;
  const {
    computer: resultComputer,
    label: resultLabel,
    user: resultUser,
  } = result;
  const [win, setWin] = useState('neutral');
  const userWin = useColorModeValue('green.700', 'green.100');
  const userLose = useColorModeValue('red.700', 'red.100');

  //  user win effect
  useEffect(() => {
    if (resultComputer && !resultUser) {
      setWin('lose');
    }
    if (!resultComputer && resultUser) {
      setWin('won');
    }
    if (!resultComputer && !resultUser) {
      setWin('neutral');
    }
  }, [resultComputer, resultUser]);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}
    >
      <Box display="flex" justifyContent="center" p={4}>
        <Heading
          as="h2"
          size="md"
          color={win === 'won' ? userWin : win === 'lose' ? userLose : ''}
        >
          {resultLabel || 'Awaiting Play'}
        </Heading>
      </Box>
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
