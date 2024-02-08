---
title: Utilizing Geo-Location Coordinates In A Weather App with GatsbyJS, TypeScript, Recoil and React!
date: "2024-02-05T10:23:00Z"
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
  title: Utilizing Geo-Location Coordinates In A Weather App with GatsbyJS, TypeScript, Recoil and React!
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#weatherapptutorial"
---

## Introduction

In the <a href="/weather-app-geo-location/"><strong>previous article</strong></a> we looked at interrogating the browser for geo-location coordinates. Assuming the user provides permission to the browser to provide their coordinates to this app, and there are no errors, we will have coordinates provided by the <a href="https://www.npmjs.com/package/react-geolocated" target="_blank"><strong>react-geolocated</strong></a> tool.

This post shows what we can do with coordinates data.

I am doing something a little weird in that these component files do not do anything except run some hooks and return no real content. My line of thinking here is to allow these functions to run in their own time.

## The Components

### src/content-apps/weather/data/utilize-coordinates-locale.tsx

```typescript
import React from 'react';
//  hooks
import useLocationNameQuery from '../hooks/use-location-name-query-by-coords';
//  types
import { Coordinates } from '../types';

interface Props extends Coordinates {
  dev?: boolean;
}

const UtilizeCoordinatesLocale = (props: Props) => {
  const { latitude, longitude } = props;

  useLocationNameQuery({ latitude, longitude });

  return <></>;
};

export default UtilizeCoordinatesLocale;
```

### src/content-apps/weather/data/utilize-coordinates-forecast.tsx

```typescript
import React from 'react';
//  hooks
import useWeatherForecastQuery from '../hooks/use-weather-forecast-query-by-coords';
//  types
import { Coordinates } from '../types';

interface Props extends Coordinates {
  dev?: boolean;
}

const UtilizeCoordinatesForecast = (props: Props) => {
  const { latitude, longitude } = props;

  useWeatherForecastQuery({ latitude, longitude });

  return <></>;
};

export default UtilizeCoordinatesForecast;
```

## A Briefing

These components have only one purpose each and that is to give some space for a hook to run. Each hook will use the coordinates supplied in a slightly different way. This separates our concerns nicely, but we have an overhead of creating a couple of files that essentially return nothing - apparently.

Is that wrong?

## What Now?

Ah, you will have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌦️⚛️

\#GatsbyJS #TypeScript #ReactJS #ReactQuery #Recoil #ChakraUI #WeatherApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
  Photo by <a href="https://unsplash.com/@dagna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Bjark</a> on <a href="https://unsplash.com/photos/clear-blue-sky-DZ975EkUJH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
</span>
