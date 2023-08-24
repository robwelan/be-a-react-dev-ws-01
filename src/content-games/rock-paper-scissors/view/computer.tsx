import React, { FC } from 'react';
//  chakra-ui
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const DisplayComputer: FC<Props> = (props) => {
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
            <Heading as="h4" fontSize="115%" textAlign="center">
              Computer’s
              <br />
              Choice:
            </Heading>
            <Text>{state.decision.computer}</Text>
          </VStack>
        </>
      </Box>
    </>
  );
};

export default DisplayComputer;
