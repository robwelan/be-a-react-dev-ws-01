import React from 'react';
//  chakra-ui
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
//  react icons
import { FaGamepad } from '@react-icons/all-files/fa/FaGamepad';
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';
//  components
import StandardDivider from '../../../../components/standard-divider';
//  interfaces
import { State, PayloadClearGame } from '../interfaces';
//  local utilities
import setClearAll from '../set-clear-all';
import setClearGame from '../set-clear-game';

interface Props {
  setState: PayloadClearGame;
  state: State;
}

const GameControlsResets = (props: Props) => {
  const { setState, state } = props;

  return (
    <>
      {(state.result.label !== '' || state.games > 0) && (
        <>
          <StandardDivider />
          <SimpleGrid columns={[2, null, 2]} spacing={4}>
            <Box display="flex" justifyContent="center">
              <Button
                aria-label="clear game"
                leftIcon={<FaGamepad />}
                onClick={() => setClearGame({ setState })}
                variant="solid"
              >
                New Game
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                aria-label="clear all"
                leftIcon={<FaTrashAlt />}
                onClick={() => setClearAll({ setState })}
                variant="outline"
              >
                Clear All
              </Button>
            </Box>
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default GameControlsResets;
