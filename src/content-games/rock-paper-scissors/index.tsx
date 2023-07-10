import React, { useEffect, useState, FC } from 'react';
//  chakra-ui
import { VStack } from '@chakra-ui/react';
//  local bits and bobs
import defaultState from './state/default-state';
import { State } from './state/interfaces';
import setDecisionComputer from './actions/set-decision-computer';
//  view
import ViewGameControlsResets from './view/game-controls-resets';
import ViewGameHeading from './view/game-heading';
import ViewPlayers from './view/players';
import ViewPlayHeading from './view/play-heading';
import ViewResults from './view/results';
import ViewWrapper from './view/wrapper';

const ContentGameRockPaperScissors: FC = () => {
  const [state, setState] = useState<State>(defaultState);

  useEffect(() => {
    if (state.decision.user !== '') {
      setDecisionComputer({
        setState,
        userDecision: state.decision.user || '',
      });
    }
  }, [state.decision.user]);

  return (
    <>
      <ViewGameHeading />
      <ViewWrapper>
        <VStack>
          <ViewPlayHeading state={state} />
          <ViewPlayers setState={setState} state={state} />

          <ViewResults state={state} />

          <ViewGameControlsResets setState={setState} state={state} />
        </VStack>
      </ViewWrapper>
    </>
  );
};

export default ContentGameRockPaperScissors;
