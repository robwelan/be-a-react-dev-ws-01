---
title: Game View - Game User Rock Paper Scissors
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

## Displaying the User

This file is going to require assets from a new package which is ‘@react-icons/all-files’. You will need to install this package before continuing.

We are going to have a few files to depend on. One is our choices, one is our TypeScript interfaces, and one is our decision action for the user.

Put simply, the user gets to make their own choice, and the action simply records that choice in the state (using the action).

The choices file describes how the the rock paper scissors game works.

## state/choices.ts

```typescript
const choicePaper = 'paper';
const choiceRock = 'rock';
const choiceScissors = 'scissors';

const choices = {
  index: [choicePaper, choiceRock, choiceScissors],
  [choicePaper]: {
    beats: choiceRock,
    value: choicePaper,
  },
  [choiceRock]: {
    beats: choiceScissors,
    value: choiceRock,
  },
  [choiceScissors]: {
    beats: choicePaper,
    value: choiceScissors,
  },
};

export default choices;
```

The choices file is an object comprising of an index key - which is an array of possible choices, and other keys of the same possible choices. There are redundancies within this file, but these redundancies make our life a little easier downstream.

The cool thing we have within this file are the basic rules of rock paper scissors.

## actions/set-decision-user.ts

```typescript
//  local utilities
import { SetState, State } from '../state/interfaces';

interface Payload {
  decision: string;
  setState: SetState;
}

const setDecisionUser = (payload: Payload) => {
  const { decision, setState } = payload;

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...prevState.decision,
      user: decision,
    },
  }));
};

export default setDecisionUser;
```

The only thing this action does is accept the setState function and the decision that the user made from the choices of ‘rock’, ‘paper’ or ‘scissors’.

It is nice and simples.

## view/user.tsx

```typescript
import React from 'react';
//  chakra-ui
import {
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
//  react icons
import { FaHandPaper } from '@react-icons/all-files/fa/FaHandPaper';
import { FaHandRock } from '@react-icons/all-files/fa/FaHandRock';
import { FaHandScissors } from '@react-icons/all-files/fa/FaHandScissors';
//  local utilities
import choice from '../state/choices';
import { State, SetState } from '../state/interfaces';
import setDecisionUser from '../actions/set-decision-user';

interface Props {
  setState: SetState;
  state: State;
}

const DisplayUser = (props: Props) => {
  const { setState, state } = props;

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
        <VStack>
          <Box>
            <Heading as="h2" size="sm" textAlign="center">
              {state.decision.user === '' ? 'Make ' : ''}Your
              <br />
              Choice:
            </Heading>
          </Box>
          <Box>
            <Stack direction="row" spacing={4}>
              {state.result.label === '' && (
                <>
                  {state.decision.user === '' && (
                    <>
                      <Tooltip label={`Choose ${choice.rock.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.rock.value}`}
                          icon={<FaHandRock />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.rock.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                      <Tooltip label={`Choose ${choice.paper.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.paper.value}`}
                          icon={<FaHandPaper />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.paper.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                      <Tooltip label={`Choose ${choice.scissors.value}`}>
                        <IconButton
                          aria-label={`choose ${choice.scissors.value}`}
                          icon={<FaHandScissors />}
                          onClick={() =>
                            setDecisionUser({
                              decision: choice.scissors.value,
                              setState,
                            })
                          }
                        />
                      </Tooltip>
                    </>
                  )}
                </>
              )}

              {state.decision.user !== '' && <Text>{state.decision.user}</Text>}
            </Stack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default DisplayUser;
```

So what does this component do? Let’s start at the beginning.

First we import React, and a few bits and pieces from Chakra-UI.

Next, we import Font Awesome icons which have been conveniently packaged in the <a href="https://react-icons.github.io/react-icons/" target="_blank">@react-icons/all-files</a> package.

And then we import our external utility files. One is a definition file and one is an action.

## DisplayUser Component

Once we have our required imports, we can then start to define our component. Our component requires props, so there is an interface describing those.

The accepted props are state and setState. These are passed in by the parent component.

Now we get to define what it is we want to return to React.

First we create box with a nice border and padding. Within the Box we create a VStack (a vertical stack of whatever is within it).

Within the VStack are two Boxes.

The first contains a Header, which is comprised of calculated content. The Heading changes based on whether the User has played or not.

The second Box contains a Stack, with direction set to ‘row’. And yeah, we could have used HStack here instead.

The Stack contains two display options. One display option is shown if the User has not played yet. The other option is shown if the User has played.


## Decision - User Has Played

```javascript
{state.decision.user !== '' && <Text>{state.decision.user}</Text>}
```

This snippet of code says “If the user has played - there is a decision recorded for the user, then show whatever that decision is”.

The other option is more complicated.

## Decision - No Result Yet

First we wrap our display to make sure it cannot show if there is a result. This is what these lines are for:

```javascript
{state.result.label === '' && (
  <>
    ...
  </>
)}
```

Inside the React fragment, we then add our next check which is:

```javascript
{state.decision.user === '' && (
  <>
    ...
  </>
)}
```

This on checks that the user has not played.

Within the fragment, we then have our buttons which are wrapped inside Tooltips.

## Example Button

All of the buttons are the same except for details. So we will look at one in detail.

```javascript
<Tooltip label={`Choose ${choice.scissors.value}`}>
  <IconButton
    aria-label={`choose ${choice.scissors.value}`}
    icon={<FaHandScissors />}
    onClick={() =>
      setDecisionUser({
        decision: choice.scissors.value,
        setState,
      })
    }
  />
</Tooltip>
```

First, we have the Tooltip and the label is set to the correct choice value.

Next we have the IconButton, and within that we have the aria label set, using the correct choice value, the Icon which is set to the correct Font Awesome icon, and then the onClick action is set to use the imported function which is setDecisionUser. This function accepts the User decision (which is of course the choice.scissors.value in this case) and the setState function which has been passed into this Component from the parent Component.

And now we are done.

## What could be improved?

I can’t remember if the state.result.label test is required. Hmmm. This means either a comment is required if the test is found to actually be necessary. It is not immediately obvious as to why this test is required. The component should be refactored by having this line removed if it is unnecessary.

The three buttons are the same except for the value and the icon. So - a new component that accepts a value and an icon and setState could be made and used.

Also, the individual choices could be exported from the choices file, and the constant for scissors could be used instead of choices.scissors.value for example.

Food for thought.
