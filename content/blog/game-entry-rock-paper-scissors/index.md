---
title: Game Entry Rock Paper Scissors
date: "2023-05-31T09:25:00Z"
categories:
  - games, typescript
meta_keywords:
  - typescript, game
meta_description: >-
  This is part of a series of posts about building a rock paper scissors game in gatsbyjs.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    typescript plus react
  src: /typescript-plus-react.png
  title: Game Entry Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---
## What do I mean by entry?

This is a description of the game’s root file. Its home page. Its index.html. Except in this case, it is an index.tsx file. So in your react project, you will need to create a file like this.

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

## Component Library
I am using <a href="https://chakra-ui.com/" target="_blank">Chakra UI</a>.

## Organisation

I could have separated UI from this file by creating a display only file and do deeper props drilling, but I decided not to.

I have however attempted to split my code into various folders to indicate the overall purpose of the files within these folders.

This should have an affect of making this code easier to maintain in the long term, because if I need to fix a particular thing, I can think - is that an action, state or view feature. And then look in the appropriate folder.

Also, this code pattern is separating out the concerns of displaying the user interface (the view), the actions and the state.

Which is pretty cool.

```language-typescript
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
```

The end, job done.
