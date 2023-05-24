import React from 'react';
//  chakra-ui
import { Box, SimpleGrid } from '@chakra-ui/react';
//  local components
import DisplayComputer from './computer';
import DisplayUser from './user';

const DisplayPlayers = (props) => {
  const { setState, state } = props;

  return (
    <Box sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}>
      <SimpleGrid columns={[2, null, 2]} spacing={4}>
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
