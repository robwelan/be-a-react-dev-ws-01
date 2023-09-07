---
title: Game View - Game Results Rock Paper Scissors
date: "2023-07-03T12:13:00Z"
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
  title: Game View Game Results Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

Let’s get right into it. Here is the file you will need.

## view/results.tsx

```typescript
import React from 'react';
//  chakra-ui
import { HStack, VStack, Text } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const DisplayResults = (props: Props) => {
  const { state } = props;

  return (
    <HStack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      sx={{ marginBottom: '1em !important', marginTop: '1em !important' }}
    >
      <VStack p={4}>
        <Text>Computer:</Text>
        <Text>{state.games.computer}</Text>
      </VStack>

      <VStack p={4}>
        <Text>Games:</Text>
        <Text>{state.games.total}</Text>
      </VStack>

      <VStack p={4}>
        <Text>User:</Text>
        <Text>{state.games.user}</Text>
      </VStack>
    </HStack>
  );
};

export default DisplayResults;
```

## Imports

First we import React of course. We also need components from Chakra-UI. And we need our typing for State which we defined <a href="https://beareact.dev/game-state-rock-paper-scissors/">here</a>.

## Interface & Function

Next we define the TypeScript interface and the Typed function function using a fat arrow method, and pass in props from the parent component. The props will only contain state and are typed by our interface of Props above.

The component returns an HStack (a horizontal stack of things) and the HStack has been given a nice border and formatting. The HStack contains a set of VStacks each with a padding of 4. It’s a thing.

Within each VStack are two paragraphs (Text). These columns represent computer wins, total games played and user wins.

And that is it!
