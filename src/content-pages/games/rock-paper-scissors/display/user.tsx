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
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';
//  local utilities
import setClearAll from '../set-clear-all';
import setClearGame from '../set-clear-game';

const DisplayUser = (props) => {
  const { choice, setDecisionUser, setState, state } = props;

  return (
    <>
      <Box display="flex" justifyContent="center">
        <VStack>
          <Box>
            <Heading as="h2" size="sm">
              {state.decision.user === '' ? 'Make ' : ''}Your Choice:
            </Heading>
          </Box>
          <Box>
            <Stack direction="row" spacing={4}>
              {state.result.label === '' && (
                <>
                  {state.games > 0 && (
                    <>
                      <Tooltip label="Clear All">
                        <IconButton
                          aria-label="clear all"
                          icon={<FaTrashAlt />}
                          onClick={() => setClearAll({ setState })}
                        />
                      </Tooltip>{' '}
                    </>
                  )}

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

              <HStack>
                {state.result.label !== '' && (
                  <Tooltip label="Clear Game">
                    <IconButton
                      aria-label="clear game"
                      icon={<FaTrashAlt />}
                      onClick={() => setClearGame({ setState })}
                    />
                  </Tooltip>
                )}
                {state.decision.user !== '' && (
                  <Text>{state.decision.user}</Text>
                )}
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default DisplayUser;
