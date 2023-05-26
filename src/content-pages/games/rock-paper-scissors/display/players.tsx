import React from 'react';
//  chakra-ui
import { Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
//  local components
import DisplayComputer from './computer';
import DisplayUser from './user';

import { State, SetState } from '../interfaces';

interface Props {
  setState: SetState;
  state: State;
}

interface Payload {
  isMobile: boolean;
  isPlayed: boolean;
}

const getSmallColumns = (payload: Payload) => {
  const { isMobile, isPlayed } = payload;

  if (isMobile && isPlayed) {
    return 2;
  }

  return 1;
};

const DisplayPlayers = (props: Props) => {
  const { setState, state } = props;
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  const smallColumns = getSmallColumns({
    isMobile,
    isPlayed: state.decision.user !== '',
  });

  return (
    <Box sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}>
      <SimpleGrid columns={[smallColumns, null, 2]} spacing={4}>
        <Box>
          <DisplayUser setState={setState} state={state} />
        </Box>
        <Box>
          <DisplayComputer state={state} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DisplayPlayers;
