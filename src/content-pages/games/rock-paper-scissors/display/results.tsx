import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const DisplayResults = (props) => {
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
    <>
      {resultLabel !== '' && (
        <>
          <Box display="flex" justifyContent="center" p={4}>
            <Heading
              as="h2"
              size="md"
              color={win === 'won' ? userWin : win === 'lose' ? userLose : ''}
            >
              {resultLabel}
            </Heading>
          </Box>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            <Box p={4}>
              <VStack>
                <Text>Computer:</Text>
                <Text>{state.win.computer}</Text>
              </VStack>
            </Box>

            <Box p={4}>
              <VStack>
                <Text>User:</Text>
                <Text>{state.win.user}</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default DisplayResults;
