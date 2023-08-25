---
title: Gatsby And Browser Console Errors In Production
date: "2023-07-23T11:55:00Z"
categories:
  - gatsby
meta_keywords:
  - javascript, gatsby, browser, console, error
meta_description: >-
  Server hydration of react and browser hydration of react do not align. But then what. What do you do?
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    gatsbyjs plus javascript
  src: /gatsby-javascript.png
  title: Gatsby And Browser Console Errors In Production
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#browserconsoleerror"
---

## What The Hell?!?

So you have published your website to Netlify and everything is going super smoothly. Then, you turn on Prerendering (you can find this feature hidden in “Build and deploy” in your Site Configuration settings). This feature is in Beta and has been for ages.

So... when you find errors in your production browser console you think “What the fuck. What the actual fuck?”. And, “Why am I being punished?”. Maybe this is just me and my reactions.

## So What Did You See In The Production Browser Console?

This is what I saw:

```apacheconf
23 framework-b1001c4c8ff5bb910d05.js:2 Uncaught Error: Minified React error #418; visit https://reactjs.org/docs/error-decoder.html?invariant=418 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at sa (framework-b1001c4c8ff5bb910d05.js:2:49240)
    at Ei (framework-b1001c4c8ff5bb910d05.js:2:122286)
    at ks (framework-b1001c4c8ff5bb910d05.js:2:109760)
    at ys (framework-b1001c4c8ff5bb910d05.js:2:109688)
    at gs (framework-b1001c4c8ff5bb910d05.js:2:109551)
    at as (framework-b1001c4c8ff5bb910d05.js:2:104683)
    at S (framework-b1001c4c8ff5bb910d05.js:2:138805)
    at MessagePort.T (framework-b1001c4c8ff5bb910d05.js:2:139337)
sa @ framework-b1001c4c8ff5bb910d05.js:2
Ei @ framework-b1001c4c8ff5bb910d05.js:2
ks @ framework-b1001c4c8ff5bb910d05.js:2
ys @ framework-b1001c4c8ff5bb910d05.js:2
gs @ framework-b1001c4c8ff5bb910d05.js:2
as @ framework-b1001c4c8ff5bb910d05.js:2
S @ framework-b1001c4c8ff5bb910d05.js:2
T @ framework-b1001c4c8ff5bb910d05.js:2
framework-b1001c4c8ff5bb910d05.js:2 Uncaught Error: Minified React error #423; visit https://reactjs.org/docs/error-decoder.html?invariant=423 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at Ei (framework-b1001c4c8ff5bb910d05.js:2:121972)
    at ks (framework-b1001c4c8ff5bb910d05.js:2:109760)
    at ys (framework-b1001c4c8ff5bb910d05.js:2:109688)
    at gs (framework-b1001c4c8ff5bb910d05.js:2:109551)
    at os (framework-b1001c4c8ff5bb910d05.js:2:106358)
    at as (framework-b1001c4c8ff5bb910d05.js:2:104910)
    at S (framework-b1001c4c8ff5bb910d05.js:2:138805)
    at MessagePort.T (framework-b1001c4c8ff5bb910d05.js:2:139337)
```

<br />

## And What Do You See in The Development Browser Console?

```apacheconf
>
```

<br />

## So What The Hell Is The Solution?

First, do a Google search on “gatsby Minified React error #418; visit https://reactjs.org/docs/error-decoder.html”.

Then, find <a href="https://github.com/gatsbyjs/gatsby/discussions/36232" target="_blank">github.com/gatsbyjs/gatsby/discussions/36232</a>.

This will save your life.

Go ahead and add this to gatsby-config.js (or gatsby-config.ts):

```javascript
  flags: {
    DEV_SSR: true,
  },
```

But it won’t help.

No, keep reading.

Make sure to scroll down to an entry by <a href="https://github.com/808vita" target="_blank">808vita</a> on Jun 12. Go on, you can do it.

Anyway, here is my version of the advice provided by this person.

In your utilities folder create a gatsby folder (if you do not have one).

You will be creating the following:

## src/utilities/gatsby/browser-hydrate-function.js

```javascript
import * as ReactDOM from 'react-dom/client';

const browserHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

export default browserHydrateFunction;
```

Now that you have followed those instructions, now what? What the hell? Why? Where does this go?

Now do a search on “gatsby replaceHydrateFunction”. You will find a document like <a href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/" target="_blank">gatsbyjs.com/docs/reference/config-files/gatsby-browser/</a>. Open it. You will notice a heading of “Gatsby Browser APIs” hopefully. Right at the top. Ignore references to gatsby-config.js in this document. These breadcrumbs will lead you in the wrong direction.

So, now you know that you need to maybe probably work with the browser APIs, you will want to create or edit the file called gatsby-browser.js (or gatsby-browser.ts).

In that file you will want to do the following magical things.

## gatsby-browser.js

```javascript
...
//  utilities
import browserHydrateFunction from './src/utilities/gatsby/browser-hydrate-function';
...

export const replaceHydrateFunction = browserHydrateFunction;
```

## So Now What?

Well, the very next step is to reboot your local development server just to make sure there is no detectable issue.

If your local development environment loads OK, then try pushing this code to production.

You should now find your production browser console is completely empty once you have refreshed the production browser.

Sigh.
