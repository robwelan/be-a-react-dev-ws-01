import React from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
//  react icons
import { FaHandLizard } from '@react-icons/all-files/fa/FaHandLizard';
import { FaHandPaper } from '@react-icons/all-files/fa/FaHandPaper';
import { FaHandRock } from '@react-icons/all-files/fa/FaHandRock';
import { FaHandScissors } from '@react-icons/all-files/fa/FaHandScissors';
import { FaHandSpock } from '@react-icons/all-files/fa/FaHandSpock';
//  local utilities
import choice from '../state/choices';
import { SetState, State } from '../state/interfaces';
import setDecisionUser from '../actions/set-decision-user';

interface Props {
  setState: SetState;
  state: State;
}

const DisplayUser = (props: Props) => {
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
            <Heading as="h4" fontSize="115%" textAlign="center">
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
                      <Tooltip label={`Choose ${choice.lizard.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.lizard.value}`}
                          icon={<FaHandLizard />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.lizard.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
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
                      <Tooltip label={`Choose ${choice.spock.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.spock.value}`}
                          icon={<FaHandSpock />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.spock.value,
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
