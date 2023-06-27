---
title: Game View - Game Players Rock Paper Scissors
date: "2023-06-23T09:39:00Z"
categories:
  - games, typescript
meta_keywords:
  - typescript, game
meta_description: >-
  This is part of a series of posts about building a rock paper scissors game in gatsbyjs.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    gatsbyjs plus javascript
  src: /typescript-plus-react.png
  title: Game View Game Players Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## Displaying The Players

There are two players in Rock Paper Scissors. One player is an ‘AI’ in this case. LOL. The other player is a human. At least in the case of this example.

Let’s get into the code of displaying our players.

### view/players.tsx

```typescript
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
```

## TypeScript Interface Definitions

The first thing we have are two defined interfaces for TypeScript.

The first interface is for Props where we are grabbing State and SetState from the interfaces definition file. We defined that over <a href="/game-state-rock-paper-scissors/">here</a>.

The second interface is for Payload where are are defining some boolean properties expected to be passed to a helper function. I could have put this helper function in a completely external file by-the-way. If this total component file size increased enough I would bother to do that.

## getSmallColumns Helper Function

The helper function simply returns the required columns to display based on whether the result of two compared booleans are true. Or not.

## DisplayPlayers Component Function

The final function is the React component itself all dressed up in TypeScript definitions. TypeScript is cool and all but it is fucking ugly to read. The FunctionComponent type is defined by the React team, so we import it from the react library itself. That saves us time building our own.

In the function we destructure setState and state from props, and isMobile from a helper hook created by Chakra-UI (we love Chakra-UI). We describe an opinion where ‘isMobile’ is any device 767px wide or less.

Next we create a constant called smallColumns that checks whether the human user has played and whether the device screen size ‘isMobile’ (true or false) or not.

## Required Component Result

Finally we return the required output from the component function.

First we include a simple grid which includes our spacing and required column count.

Next we have two Boxes which each contain the DisplayUser and the DisplayComputer components respectively. The DisplayUser component drills down the setState and state props and the DisplayComputer component drills down the state prop.

And we are done for now.

## For Extra Credit (LOL)

Is the DisplayPlayers function a Pure Function or not? To find out what a Pure Function is, check this <a href="https://en.wikipedia.org/wiki/Pure_function" target="_blank">definition</a>.
