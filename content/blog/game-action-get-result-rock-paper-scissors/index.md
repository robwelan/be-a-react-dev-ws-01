---
title: Game Action - Get Result Rock Paper Scissors
date: "2023-07-17T08:44:00Z"
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
  title: Game Action Get Result Rock Paper Scissors
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

We first looked at setDecisionComputer <a href="https://beareact.dev/game-entry-rock-paper-scissors/">here</a>.

Let’s get right into it.

## actions/get-result.ts

```typescript
interface Payload {
  computerDecision: {
    beats: string;
    value: string;
  };
  userDecision: string;
}

const getResult = (payload: Payload) => {
  const { computerDecision, userDecision } = payload;

  if (computerDecision.value === userDecision) {
    return {
      judgement: 'It’s a tie.',
      computer: 0,
      user: 0,
    };
  }

  if (computerDecision.beats === userDecision) {
    return {
      judgement: 'Computer wins…',
      computer: 1,
      user: 0,
    };
  }

  return {
    judgement: 'You win!!!',
    computer: 0,
    user: 1,
  };
};

export default getResult;
```

First we need to describe a typescript interface of expected types to be passed into this function. We need the computer decision and the user decision. The computer decision is a shape which contains the computer’s actual decision and what that decision beats. The user decision is the value the user chose.

The result returns an object made up of judgement, computer value and user value. The values are either 1 or zero depending on whether the user or computer won (a 1 is set) or lost (a 0 is set) whether there was a tie or one actor lost to the other.

And that’s it really.
