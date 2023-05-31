import React from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
//  react icons
import { FaHandPaper } from '@react-icons/all-files/fa/FaHandPaper';
import { FaHandRock } from '@react-icons/all-files/fa/FaHandRock';
import { FaHandScissors } from '@react-icons/all-files/fa/FaHandScissors';
//  local utilities
import choice from '../state/choices';
import setDecisionUser from '../actions/set-decision-user';

const DisplayUser = (props) => {
  const { setState, state } = props;

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
        <VStack>
          <Box>
            <Heading as="h2" size="sm" textAlign="center">
              {state.decision.user === '' ? 'Make ' : ''}Your
              <br />
              Choice:
            </Heading>
          </Box>
          <Box>
            <Stack direction="row" spacing={4}>
              {state.result.label === '' && (
                <>
                  {state.decision.user === '' && (
                    <>
                      <Tooltip label={`Choose ${choice.rock.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.rock.value}`}
                          icon={<FaHandRock />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.rock.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                      <Tooltip label={`Choose ${choice.paper.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.paper.value}`}
                          icon={<FaHandPaper />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.paper.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                      <Tooltip label={`Choose ${choice.scissors.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.scissors.value}`}
                          icon={<FaHandScissors />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.scissors.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                    </>
                  )}
                </>
              )}

              {state.decision.user !== '' && <Text>{state.decision.user}</Text>}
            </Stack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default DisplayUser;
