---
title: Game View - Game Heading Rock Paper Scissors
date: "2023-06-05T12:22:00Z"
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
  title: Game View Game Heading Rock Paper Scissors
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#rockpaperscissors"
---
## What you will be building

Please check this link: <a href="https://beareact.dev/games/rock-paper-scissors/" target="_blank">Rock Paper Scissors Game</a>

## Game Heading

Every page needs a heading right? Well, so does this page. Here we have created a very basic heading using the Heading component from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>.

This page uses a component, so I'm adding that here too so that you know what is in this component.

### constants/colors.ts file

```language-typescript
const colors = {
  brand: {
    yellow: '#FFDE59',
  },
};

export default colors;
```

### components/standard-divider.tsx file

```language-typescript
import React from 'react';
//  chakra-ui
import { Divider } from '@chakra-ui/react';
//  constants
import colors from '../constants/colors';

interface Props {
  marginBottom?: string;
  marginTop?: string;
}

const StandardDivider = (props: Props) => {
  const { marginBottom = '1em', marginTop = '1em' } = props;

  return (
    <>
      <Divider
        borderColor={colors.brand.yellow}
        sx={{
          marginBottom: `${marginBottom} !important`,
          marginTop: `${marginTop} !important`,
        }}
      />
    </>
  );
};

export default StandardDivider;
```

### view/game-heading.tsx file

```language-typescript
import React from 'react';
//  chakra-ui
import { Heading } from '@chakra-ui/react';
//  components
import StandardDivider from '../../../components/standard-divider';

const DisplayHeading = () => (
  <>
    <Heading as="h2" fontSize="125%" color="gray.500" textAlign="center">
      Classic Game
    </Heading>
    <Heading as="h1" fontSize="130%" textAlign="center">
      Rock Paper Scissors
    </Heading>
    <StandardDivider marginBottom="1em" />
  </>
);

export default DisplayHeading;
```

## File Locations

The purpose of locating files in separate subdirectories is to help separate out your code into logical containers - or separation of concerns. Items which are shared across the application you are building should be placed in specific folders to help make that code more available for re-use.

## How do you know a bit of code is re-useable?

Sometimes this is not apparent at first when you are coding. But, as soon as you notice you are writing the same bit of code more than twice across the one application, that bit of code becomes a candidate for re-use. Depending on what type of feature it is might make it a component (in terms of ReactJS) or a utility function (in terms of pure JavaScript) or a constant (in terms of pure JavaScript).

## FYI: Main GatsbyJS Folders In My Projects

I generally separate my major code concerns into these main folders within the src folder in a GatsbyJS project:

* constants;
* components;
* content-apps;
* content-games;
* content-layout;
* content-pages;
* hooks;
* images;
* pages;
* security;
* templates; and
* utilities.

<br/>

The utilities folder contains pure JavaScript or Typescript functions used across the application.
