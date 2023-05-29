import React, { useEffect, useState } from 'react';
//  chakra-ui
import { VStack } from '@chakra-ui/react';
//  display
import DisplayHeading from './display/heading';
import DisplayResults from './display/results';
import DisplayGameControlsResets from './display/game-controls-resets';
import DisplayPlayers from './display/players';
import DisplayWrapper from './display/wrapper';
//  local bits and bobs
import defaultState from './default-state';
import { State, SetState } from './interfaces';
import setDecisionComputer from './set-decision-computer';

const ContentGameRockPaperScissors = () => {
  const [state, setState] = useState<State>(defaultState as State);

  useEffect(() => {
    if (state.decision.user !== '') {
      setDecisionComputer({ setState, userDecision: state.decision.user });
    }
  }, [state.decision.user]);

  return (
    <>
      <DisplayHeading />
      <DisplayWrapper>
        <VStack>
          <DisplayPlayers setState={setState} state={state} />

          <DisplayResults state={state} />

          <DisplayGameControlsResets setState={setState} state={state} />
        </VStack>
      </DisplayWrapper>
    </>
  );
};

export default ContentGameRockPaperScissors;
