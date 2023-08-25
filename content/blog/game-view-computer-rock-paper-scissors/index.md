---
title: Game View - Computer Rock Paper Scissors
date: "2023-06-29T08:15:00Z"
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
  title: Game View Computer Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## Displaying the Computer

Consider the following code:

## view/computer.tsx

```language-typescript
import React from 'react';
//  chakra-ui
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const DisplayComputer = (props: Props) => {
  const { state } = props;

  return (
    <>
      <Box
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        justifyContent="center"
        minH="120px"
        p={4}
      >
        <>
          <VStack>
            <Heading as="h2" fontSize="125%" textAlign="center">
              Computer’s
              <br />
              Choice:
            </Heading>
            <Text>{state.decision.computer}</Text>
          </VStack>
        </>
      </Box>
    </>
  );
};

export default DisplayComputer;
```

## What This Seems Simple

Well, it is. The computer decision is handled behind the scenes in the actions. Which I will cover in more detail later.

All that needs to happen in this file is to display the results of the “computer’s” descision. If you want, let’s pretend we built a powerful AI. Ha.

Basically, all that is going on is that we are displaying a Box with a border, and within that a Heading that does not change, and Text which either contains an empty string or a non-empty string.

Ta Da! Job Done.
