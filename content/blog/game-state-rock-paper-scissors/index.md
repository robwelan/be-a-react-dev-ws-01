---
title: Game State Rock Paper Scissors
date: "2023-05-26T14:16:00Z"
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
  title: Game State Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---
## In The Beginning…

Everyone needs to start somewhere right? Well, at the end of this series we will have a working rock-paper-scissors game. We will be using TypeScript (which is really JavaScript with a typing overlay), and React.

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

## State Of The Application

But first, we will look at some fundamental code snippets required to get the game working.

Create a file called default-state.ts. Inside this file, place the following code:

```javascript
const defaultState = {
  decision: {
    computer: '',
    user: '',
  },
  games: {
    computer: 0,
    user: 0,
    total: 0,
  },
  result: {
    computer: false,
    user: false,
    label: '',
  },
};

export default defaultState;
```

What is the above? It is a basic object containing named values. Sometimes a named value is another object (a nested object if you will). Sometimes a named value is a string and sometimes a number or a boolean or even an array. This object has no need for an array.

## State decision

The decision object contains computer and user keys. These will be filled with the choice each opponent makes (and will be either ‘rock’ or ‘paper’ or ‘scissors’).

## State games

The games is an object containing numbers. The total will be the total number of games played in the current session. The computer and user will tally to the amount of wins of each respective opponent. Because it is possible to tie, the total games will not necessarily equal the total amount of wins.


## State result

The result object contains label, computer and user. The computer and user keys resolve in booleans. The label is simply a place holder for an output message (it might say “It’s a Tie!” for example).

## How To Type This Shit?

Well, we should create an interfaces.ts file. And in that we would have the following interface declarations:

```typescript
import { Dispatch, SetStateAction } from 'react';

interface State {
  decision: {
    computer?: string;
    user?: string;
  };
  games: {
    computer: number;
    total: number;
    user: number;
  };
  result: {
    label?: string;
    computer: boolean;
    user: boolean;
  };
}

type SetState = Dispatch<SetStateAction<State>>;

export { SetState, State };
```

## State

From the above we can determine that the State is an object made up of objects.

### Type decision

We have computer and user, both of which are optional strings. This means we can have an empty string.

### Type games

Inside the games object we have mandatory numbers. That means that we expect maybe a zero or some other number. But not a string or some other shit.

### Type result

The label can be an optional string. And the computer and user types will be either true or false (and therefore boolean).

I think this will help you understand a little bit about what we will be building.

## SetState

SetState expects the setter from useState. So, we want to Dispatch the SetStateAction and pass it the State interface.
