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
import { State } from './interfaces';
import setDecisionComputer from './set-decision-computer';
//  styles
import './index.css';

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

          <DisplayGameControlsResets state={state} setState={setState} />
        </VStack>
      </DisplayWrapper>
    </>
  );
};

export default ContentGameRockPaperScissors;
