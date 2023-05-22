import React, { useEffect, useState } from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  IconButton,
  SimpleGrid,
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
//  display
import DisplayComputer from './display/computer';
import DisplayResults from './display/results';
import DisplayUser from './display/user';
//  local bits and bobs
import choice from './choices';
import defaultState from './default-state';
import { State } from './interfaces';
import setDecisionComputer from './set-decision-computer';
import setDecisionUser from './set-decision-user';
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
      <Heading as="h1">Rock Paper Scissors Game</Heading>
      <br />
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        <DisplayUser
          choice={choice}
          setDecisionUser={setDecisionUser}
          setState={setState}
          state={state}
        />
        <DisplayComputer state={state} />
      </SimpleGrid>
      <DisplayResults state={state} />
    </>
  );
};

export default ContentGameRockPaperScissors;
