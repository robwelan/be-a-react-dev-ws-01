---
title: Game View - Game Controls Resets Rock Paper Scissors
date: "2023-06-27T09:40:00Z"
categories:
  - games, typescript
meta_keywords:
  - typescript, game
meta_description: >-
  This is part of a series of posts about building a rock paper scissors game in gatsbyjs.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    gatsbyjs plus typescript
  src: /typescript-plus-react.png
  title: Game View Game Controls Resets Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## Introduction

This is one of the more complicated view components in that it includes game controllers. Rather than merely showing game display, this component provides mechanisms for game control also. We will get into this.

First, here is the code.

## view/game-controls-resets.tsx

```typescript
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
```

## Imports

This component requires React, useEffect and useState from react. It also requires Box, Button and SimpleGrid from Chakra-UI, and a couple icons from Font Awesome within react icons.

Next it imports a standard shared component from the components bucket, the StandardDivider, then the interfaces for SetState and State, and finally a couple of actions for game control.

## Interface

This interface requires SetState and State for typing Props.

## Function

Next we create our fat arrow function and call it GameControlsResets. This function accepts props (and props contains setState and state).

Within the function, first the props are desctructured exposing setState and state and then a local state for column display control is created with useState.

The useState feature is pretty simple. A default state of 1 is set (1 column needed for display), and the state is exposed with the columns property and the setting function is exposed by the setColumns function.

## Columns Effect

The function then utilises the useEffect hook to decide how to respond to changes in state result label and state game total. Do we need to refer to the state result label? Probably not really. There are simpler ways to write this rule set but the way it is written is clear as to what is required. Do we need to refactor it to save lines of code or appear smarter to our colleagues? Meh.

## Return

The function returns the view next. The view only returns something if there is at least one game played.

Assuming there is a game played the output is wrapped in a fragment in order to meet React component return rules.

Within the fragment, the StandardDivider is used “as is”. A SimpleGrid is used and the amount of columns displayed at various screen sizes is chosen based on the columns state value.

The state result label is checked for a value in case the New Game button should be displayed or not. The state.games.total is already checked for a value so there is no need to check this value again. The Clear All button will be displayed by default at this point.

The Buttons are placed inside Box which have their content centered.

The Buttons themselves are given aria labels just to make sure that screen readers can recognise them for vision impaired people. Each button is given an onClick handler to respond to the click event.

The next article will discuss the actions in more detail.

:-)
