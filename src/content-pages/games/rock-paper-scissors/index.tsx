import React, { useEffect, useState } from 'react';
//  chakra-ui
import { VStack } from '@chakra-ui/react';
//  local bits and bobs
import defaultState from './state/default-state';
import { State, SetState } from './state/interfaces';
import setDecisionComputer from './actions/set-decision-computer';
//  view
import ViewGameControlsResets from './view/game-controls-resets';
import ViewHeading from './view/heading';
import ViewPlayers from './view/players';
import ViewResults from './view/results';
import ViewWrapper from './view/wrapper';

const ContentGameRockPaperScissors = () => {
  const [state, setState] = useState<State>(defaultState as State);

  useEffect(() => {
    if (state.decision.user !== '') {
      setDecisionComputer({ setState, userDecision: state.decision.user });
    }
  }, [state.decision.user]);

  return (
    <>
      <ViewHeading />
      <ViewWrapper>
        <VStack>
          <ViewPlayers setState={setState} state={state} />

          <ViewResults state={state} />

          <ViewGameControlsResets setState={setState} state={state} />
        </VStack>
      </ViewWrapper>
    </>
  );
};

export default ContentGameRockPaperScissors;
