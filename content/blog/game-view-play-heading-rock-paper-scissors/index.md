---
title: Game View - Game Play Heading Rock Paper Scissors
date: "2023-06-19T08:55:00Z"
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
  title: Game View Game Play Heading Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---
## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## Game Play Heading

The game play heading is distinct from the game heading. The game heading is simply a page title. The play heading is feedback to the client about where the client is in the game play cycle. To communicate this, we will use some React hooks to help control the display of information to the client.

Let’s dive in to the code:

### view/play-heading.tsx file

```typescript
import React, { useEffect, useState } from 'react';
//  chakra-ui
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
//  interfaces
import { State } from '../state/interfaces';

interface Props {
  state: State;
}

const PlayHeading = (props: Props) => {
  const { state } = props;
  const { result } = state;
  const {
    computer: resultComputer,
    label: resultLabel,
    user: resultUser,
  } = result;
  const [win, setWin] = useState('neutral');
  const userWin = useColorModeValue('green.700', 'green.100');
  const userLose = useColorModeValue('red.700', 'red.100');

  //  user win effect
  useEffect(() => {
    if (resultComputer && !resultUser) {
      setWin('lose');
    }
    if (!resultComputer && resultUser) {
      setWin('won');
    }
    if (!resultComputer && !resultUser) {
      setWin('neutral');
    }
  }, [resultComputer, resultUser]);

  return (
    <>
      <Box display="flex" justifyContent="center" p={4}>
        <Heading
          as="h2"
          size="md"
          color={win === 'won' ? userWin : win === 'lose' ? userLose : ''}
        >
          {resultLabel || 'Awaiting Play'}
        </Heading>
      </Box>
    </>
  );
};

export default PlayHeading;
```

The first thing you will notice is that we are passing in props. Props are a variables passed in to functions. In React, the word ‘prop’ or ‘props’ is used to communicate any variable passed into a React component. It is simply a naming convention. Get used to it. Props is an object.

### What is in props?

```javascript
  const { state } = props;
  const { result } = state;
  const {
    computer: resultComputer,
    label: resultLabel,
    user: resultUser,
  } = result;
```

**PRO TIP**: what we did up there is called ‘destructuring’.

We expect to find a state, and within state we expect to find a result. Within result we expect to find computer, label and user. We alias these to resultComputer, resultLabel and resultUser respectively. This is technically not required in this file, but I find doing this can save time later because it can be difficult to foresee if we might need another part of the state object - such as the games key - which also contains computer and user.

These are defined in the State interface which we have already defined <a href="/game-state-rock-paper-scissors/">here</a>.

### useColorModeValue and useState and useEffect

```javascript
  const [win, setWin] = useState('neutral');
  const userWin = useColorModeValue('green.700', 'green.100');
  const userLose = useColorModeValue('red.700', 'red.100');

  //  user win effect
  useEffect(() => {
    if (resultComputer && !resultUser) {
      setWin('lose');
    }
    if (!resultComputer && resultUser) {
      setWin('won');
    }
    if (!resultComputer && !resultUser) {
      setWin('neutral');
    }
  }, [resultComputer, resultUser]);
```

OK. useColorModeValue is from Chakra-UI. It sets a color based on whether the client is using ‘light’ or ‘dark’ mode. We don’t discuss how to make this feature work in this tutorial.

We use useState to set a string. The default state value is ‘neutral’. But, we use useEffect to respond to changes to resultComputer and resultUser.

We can use the values of resultComputer and resultUser to set the state of ‘win’. If you are understanding the code correctly you will notice ‘win’ has three possible states. You may also notice that my code is verbose. That means that the next person who comes along to read this code should have no question about what this code is supposed to do. This could be refactored out to a helper function which could reduce the complexity of the useEffect content a little, but it is not essential.

### ternary

```javascript
  color={win === 'won' ? userWin : win === 'lose' ? userLose : ''}
```

I did something naughty here. If you are wondering what you can read <a href="https://eslint.org/docs/latest/rules/no-nested-ternary" rel="noopener" target="_blank">‘no nested ternary’</a>.

However, sometimes it’s easier to just get shit done. That said, you should be able to look at this code and notice that it is hard to read. And that is the cruxt of why nested ternaries suck dead dog’s balls.

In this case I chose to use a nested ternary because it is not too shit in this specific case. The line is not super long and not super confusing. But, it could be wise to refactor this out to a simple helper function and return the result of the helper function, especially if the logic required became more convoluted than it currently is.

### Heading content

```javascript
  {resultLabel || 'Awaiting Play'}
```

So this little bit of code is about knowing how to plan ahead and knowing how to use Javascript to respond to falsey values.

The result label - by default - is an empty string (you can check this for yourself, the link is <a href="/game-state-rock-paper-scissors/">here</a>).

What magic is this? Well, what the code says without saying it is: if resultLabel has a value, show resultValue OR (‘||’) if resultLabel does not have a value, show ‘Awaiting Play’.

Here's a list of JavaScript's  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" rel="noopener" target="_blank">falesy values</a>.

OK. Done.
