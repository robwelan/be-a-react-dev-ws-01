---
title: Gatsby’s Wrap Root Element
date: "2023-05-15T16:09:00Z"
categories:
  - gatsby
meta_keywords:
  - javascript, gatsbyjs, wrapRootElement
meta_description: >-
  It is possible that you will need to wrap your gatsby application/website in a provider of some kind. Here is a quick guide to get you there.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    gatsbyjs plus javascript
  src: /gatsby-javascript.png
  title: Gatsby’s Wrap Root Element
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#wrapRootElement"
---
Gatsby’s wrapRootElement exists in both the browser and server side rendering APIs.

This means that you’ll want to add the wrapRootElement to both the gatsby-browser.js/ts file and to the gatsby-ssr.js/ts file.

This guide looks at the gatsby-ssr.js/ts file because once you know this one you can duplicate the code in the other file.

Note that the gatsby-browser.js/ts file and the gatsby-ssr.js/ts file must go in the same directory (the root) as the gatsby-config.js/ts file. Or it won’t work.

So here is an example gatsby-ssr.js/ts file which has the wrapRootElement customised.

The wrapRootElement is for providers. Putting other stuff in there beside provider definitions could cause a whiffy code smell.

<br />

## gatsby-ssr.js

```javascript
import CustomRoot from './wrap-root-element';

export const wrapRootElement = CustomRoot;
```

<br />

## wrap-root-element.js (or could be .ts extension)

```javascript
import React from 'react';
import { Provider } from 'jotai';
//  chakra-ui
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
//  theme
import theme from './src/@chakra-ui/gatsby-plugin/theme';

const wrapRootElement = ({ element }) => (
  <Provider>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ChakraProvider>
  </Provider>
);

export default wrapRootElement;
```

<br />

### Updated 14-Jun-2023

I was today years old when I discovered in the <a href="https://www.gatsbyjs.com/plugins/@chakra-ui/gatsby-plugin/" rel="noopener" target="_blank">@chakra-ui/gatsby-plugin</a> documentation that you had to have the theme in a specific folder within the src folder. Or else you may as well not bother trying.

## Last But Not Least

Oh, in case you were wondering, <a href="https://jotai.org/" rel="noopener" target="_blank">Jotai</a> is a cool state management system which is easier to learn and use than <a href="https://redux.js.org/" rel="noopener" target="_blank">Redux</a>.

<a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a> is a framework thingy to style up your website.

Both are sexy. Give them a try.
