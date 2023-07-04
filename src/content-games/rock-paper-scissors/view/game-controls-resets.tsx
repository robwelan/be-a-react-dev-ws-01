import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
//  react icons
import { FaGamepad } from '@react-icons/all-files/fa/FaGamepad';
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';
//  components
import StandardDivider from '../../../components/standard-divider';
//  interfaces
import { SetState, State } from '../state/interfaces';
//  local actions
import setClearAll from '../actions/set-clear-all';
import setClearGame from '../actions/set-clear-game';

interface Props {
  setState: SetState;
  state: State;
}

const GameControlsResets = (props: Props) => {
  const { setState, state } = props;
  const [columns, setColumns] = useState(1);

  // columns effect
  useEffect(() => {
    if (columns === 1) {
      if (state.result.label !== '' && state.games.total > 0) {
        setColumns(2);
      }
    }

    if (columns === 2) {
      if (state.result.label === '' || state.games.total === 0) {
        setColumns(1);
      }
    }
  }, [state.result.label, state.games.total]);

  return (
    <>
      {(state.result.label !== '' || state.games.total > 0) && (
        <>
          <StandardDivider />
          <SimpleGrid columns={[columns, null, columns]} spacing={4}>
            {state.result.label !== '' && (
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
            )}

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
