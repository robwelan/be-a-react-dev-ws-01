import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const PlayHeading = (props: Props) => {
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
      <Box display="flex" justifyContent="center" p={4}>
        <Heading
          as="h2"
          size="md"
          color={win === 'won' ? userWin : win === 'lose' ? userLose : ''}
        >
          {resultLabel || 'Awaiting Play'}
        </Heading>
      </Box>
    </>
  );
};

export default PlayHeading;
