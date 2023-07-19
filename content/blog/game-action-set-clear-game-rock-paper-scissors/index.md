---
title: Game Action - Set Clear Game Rock Paper Scissors
date: "2023-07-19T12:00:00Z"
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
  title: Game Action Set Clear Game Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## Reference

We first looked at setClearGame <a href="https://beareact.dev/game-view-controlsresets-rock-paper-scissors/">here</a>.

Let’s get right into it.

## actions/set-clear-game.ts

```typescript
import defaultState from '../state/default-state';
//  interfaces
import { SetState, State } from '../state/interfaces';

interface Payload {
  setState: SetState;
}

const setClearGame = (payload: Payload) => {
  const { setState } = payload;

  setState((prevState: State) => ({
    ...prevState,
    decision: {
      ...defaultState.decision,
    },
    result: {
      ...defaultState.result,
    },
  }));
};

export default setClearGame;
```

## Our Imports

We will of course require the default state to work with and the types to work with also. These have already been defined <a href="https://beareact.dev/game-state-rock-paper-scissors/">here</a>.

## But what about the function?

All that is required next is to clear the pieces that affect the current game play.

So to do this, we use setState - which has been deconstructed from the payload which has been passed to the setClearGame function. We also need the default state (which we have imported because we want to set much of the previous state back to the default state).

Within the setClearGame function we need to use setState to return most of the previous state (prevState) and then we want to reset the decision and result keys back to the default states for each.

We leave the games key alone because we want to continue to tally game results.

And there you have it. Job done!
