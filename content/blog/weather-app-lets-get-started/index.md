---
title: Let’s Get Started Building A Weather App with GatsbyJS, TypeScript, Recoil and React!
date: "2023-12-20T09:46:00Z"
categories:
  - tutorial
meta_keywords:
  - weather app tutorial, typescript, react, react lazy, react-query, react suspense, recoil, coding tutorial
meta_description: >-
  In this tutorial, we're going to create a simple weather app together! 🌦️⚛️
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    weather app tutorial
  src: /bjark-DZ975EkUJH0-unsplash.jpg
  title: Let’s Get Started Building A Weather App with GatsbyJS, TypeScript, Recoil and React!
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#weatherapptutorial"
---

## Introduction

Building an internet hosted weather app is a useful way to learn how to consume an API endpoint. If you can consume a public api like this, then you can work with a back end developer who is providing data to you from a database for example.

## Our first bits of code

### src/pages/apps/weather.js

```typescript
import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import Content from '../../content-apps/weather';
//  content-seo
import descriptionSeo from '../../content-apps/weather/seo/description';

const PageContent = ({ location }) => <Content location={location} />;

export default PageContent;

export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Weather" />
);
```

### src/content-apps/weather/index.ts

```typescript
import React, { lazy, Suspense } from 'react';
import { Text } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//  components
import LoadingScreen from '../../components/loading-screen';
//  local components
const GeoLocation = lazy(() => import('./data/geo-location'));

const queryClient = new QueryClient();

const Content = () => {
  return (
    <ErrorBoundary fallback={<Text>Something went wrong.</Text>}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingScreen />}>
          <GeoLocation />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Content;
```

These are the entry points of our app. I am using GatsbyJS, so the entry point to the app is always in the src/pages directory somewhere. That is simply how GatsbyJS functions.

I like to separate my content to a different directory set because the pages directory really can only handle one file for a page. I have found filling it with directories is cumbersome. I like making a single file for my web page entry point.

The content is a little special. I am experimenting with React.lazy and React.Suspense in order to improve app performance. The reason why this can be good is because this app relies on external data, and the lazy Suspence features will help reduce apparent lag to the end-user when getting data from the api service.

I am also wrapping everything in an ErrorBoundary so that if something goes wrong in the underlying code, the end-user will be notified of that and not some shit instead.

And all of our data is being grabbed using <a href="https://github.com/TanStack/query" target="_blank">react-query</a>.

## What Now?

Ah, you will have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌦️⚛️

\#GatsbyJS #TypeScript #ReactJS #ReactQuery #Recoil #ChakraUI #WeatherApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
  Photo by <a href="https://unsplash.com/@dagna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Bjark</a> on <a href="https://unsplash.com/photos/clear-blue-sky-DZ975EkUJH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
</span>
