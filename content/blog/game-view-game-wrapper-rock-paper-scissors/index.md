---
title: Game View - Game Wrapper Rock Paper Scissors
date: "2023-06-12T09:22:00Z"
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
  title: Game View Game Wrapper Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---
## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

## Game Wrapper

The game wrapper is a simple view component used to provide an encasement around a few other components.

## view/wrapper.tsx file

```typescript
import React, { ReactElement } from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactElement;
}

const DisplayWrapper = (props: Props) => {
  const { children } = props;

  return (
    <Box display="flex" justifyContent="center" w="100%">
      {children}
    </Box>
  );
};

export default DisplayWrapper;
```

The only thing particularly special about this component is that is uses the Box component from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>.

If you are not familiar with React, you may be wondering what children is. We are expecting React elements to be passed into this component from the [Game Entry](/game-entry-rock-paper-scissors/) component.

Therefore the interface for children is declared (and not optional - optional interfaces are indicated with a question (?) mark), and we use the ReactElement definition in this case.

Job done!
