import React from 'react';
//  chakra-ui
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const DisplayComputer = (props) => {
  const { state } = props;

  return (
    <>
      <Box display="flex" justifyContent="center">
        {state.decision.user !== '' && (
          <>
            <VStack>
              <Heading as="h2" size="sm">
                Computer’s Choice:{' '}
              </Heading>
              {state.thinking && (
                <Text className="blink_me">Please wait, I am thinking…</Text>
              )}
              {!state.thinking && <Text>{state.decision.computer}</Text>}
            </VStack>
          </>
        )}
      </Box>
    </>
  );
};

export default DisplayComputer;
