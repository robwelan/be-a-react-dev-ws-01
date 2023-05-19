---
title: Gatsby’s Wrap Page Element
date: "2023-05-19T09:45:00Z"
categories:
  - gatsby
meta_keywords:
  - javascript, gatsbyjs, wrapPageElement
meta_description: >-
  Per Gatsby documentation: "This is useful for setting wrapper components around pages that won’t get unmounted on page changes." Basically this element is used to prevent "screen flash" when routes change.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    gatsbyjs plus javascript
  src: /gatsby-javascript.png
  title: Gatsby’s Wrap Page Element
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#gatsbyjs"
  - "#wrapPageElement"
---
Gatsby’s wrapPageElement exists in both the browser and server side rendering APIs.

This means that you’ll want to add the wrapPageElement to both the gatsby-browser.js/ts file and to the gatsby-ssr.js/ts file.

This guide looks at the gatsby-ssr.js/ts file because once you know this one you can duplicate the code in the other file.

Note that the gatsby-browser.js/ts file and the gatsby-ssr.js/ts file must go in the same directory (the root) as the gatsby-config.js/ts file. Or it won’t work.

So here is an example gatsby-ssr.js/ts file which has the wrapPageElement customised.

The wrapPageElement is for layout. What is not as clear is that it is for routing also. But setting up for routing is tricky because the documentation I find is unclear on these points.

<br />

## gatsby-ssr.js

```javascript
import CustomPage from './wrap-page-element';

export const wrapPageElement = CustomPage;
```

<br />

## wrap-page-element.js (or could be .ts extension)

```javascript
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
//  routes and layout
import Layout from './src/content-layout';
import Routes from './src/security/routes';

const wrapPageElement = ({ element, props }) => {
  const { location } = props;

  return (
    <Layout {...props}>
      <Routes element={element} location={location} />
    </Layout>
  );
};

export default wrapPageElement;
```
