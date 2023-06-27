import React, { FunctionComponent } from 'react';
//  chakra-ui
import { SimpleGrid, useMediaQuery } from '@chakra-ui/react';
//  local components
import DisplayComputer from './computer';
import DisplayUser from './user';

import { State, SetState } from '../state/interfaces';

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

const DisplayPlayers: FunctionComponent<Props> = (props: Props) => {
  const { setState, state } = props;
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  const smallColumns = getSmallColumns({
    isMobile,
    isPlayed: state.decision.user !== '',
  });

  return (
    <SimpleGrid columns={[smallColumns, null, 2]} spacing={4}>
      <DisplayUser setState={setState} state={state} />
      <DisplayComputer state={state} />
    </SimpleGrid>
  );
};

export default DisplayPlayers;
