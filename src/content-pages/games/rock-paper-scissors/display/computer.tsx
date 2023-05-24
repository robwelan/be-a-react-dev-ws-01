import React from 'react';
//  chakra-ui
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
//  interfaces
import { State } from '../interfaces';

interface Props {
  state: State;
}

const DisplayComputer = (props: Props) => {
  const { state } = props;

  return (
    <>
      <Box
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        justifyContent="center"
        minH="120px"
        p={4}
      >
        <>
          <VStack>
            <Heading as="h2" size="sm" textAlign="center">
              Computer’s
              <br />
              Choice:
            </Heading>
            {state.thinking && (
              <Text className="blink_me">Please wait, I am thinking…</Text>
            )}
            {!state.thinking && <Text>{state.decision.computer}</Text>}
          </VStack>
        </>
      </Box>
    </>
  );
};

export default DisplayComputer;
