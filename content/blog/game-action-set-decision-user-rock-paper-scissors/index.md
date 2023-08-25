---
title: Game Action - User Decision Rock Paper Scissors
date: "2023-07-10T09:56:00Z"
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
  title: Game Action User Decision Rock Paper Scissors
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

We first looked at setDecisionUser <a href="https://beareact.dev/game-view-user-rock-paper-scissors/">here</a>.

## actions/set-decision-user.ts

```language-typescript
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

## But What Does It Do?

The function is fairly simple. It accepts a payload. The payload is typed by a TypeScript interface called Payload. We import SetState and State from state/interfaces. We first looked at the interfaces for SetState and State <a href="https://beareact.dev/game-state-rock-paper-scissors/">here</a>.

setState calls an internal react function which is used to modify state. We need to modify the user decision so we grab the previous state (declared with the name of prevState) and return the modified version which is most of the prevState as is, and then the decision is modified, but we want some of the prevState decision to be returned as is, and the user portion is changed to whatever the user decided.

And job done!
