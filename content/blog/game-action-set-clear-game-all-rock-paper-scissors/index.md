---
title: Game Action - Set Clear All Rock Paper Scissors
date: "2023-07-21T09:53:00Z"
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
  title: Game Action Set Clear All Rock Paper Scissors
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

Let’s get going.

## actions/set-clear-all.ts

```typescript
import defaultState from '../state/default-state';
//  interfaces
import { SetState } from '../state/interfaces';

interface Payload {
  setState: SetState;
}

const setClearAll = (payload: Payload) => {
  const { setState } = payload;

  setState(defaultState);
};

export default setClearAll;
```


## Our Imports

We need the default state to work with and the types to work with also. These have already been defined <a href="https://beareact.dev/game-state-rock-paper-scissors/">here</a>.

## And the function?

Well, we want to clear everything. The easiest way to do that is to reset the state completely.

So that is what we do.

Ta da! Job done!
