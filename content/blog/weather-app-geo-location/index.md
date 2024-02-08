---
title: Working With Geo-Location In A Weather App with GatsbyJS, TypeScript, Recoil and React!
date: "2024-01-30T09:46:00Z"
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
  title: Working With Geo-Location In A Weather App with GatsbyJS, TypeScript, Recoil and React!
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#weatherapptutorial"
---

## Introduction

When we are interested in weather, we usually want to know about the weather in our local area. Outside for instance. For this, we need to know our geographic location. And for that, we need to find out where that is. Luckily, browsers will tell us with varying degrees of accuracy where we are. So we can interogate our browser for our location.

## Our first bits of code

### src/content-apps/weather/data/geo-location.tsx

```typescript
import React from 'react';
//  geolocated
import { useGeolocated } from 'react-geolocated';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import UtilizeCoordinatesForecast from './utilize-coordinates-forecast';
import UtilizeCoordinatesLocale from './utilize-coordinates-locale';
//  state
import { weatherLocationForecast, weatherLocationLocale } from '../state/atoms';
//  view
import WeatherByLocationCard from '../view/weather-by-location';

const GeoLocatedWeather = () => {
  const forecast = useRecoilValue(weatherLocationForecast);
  const locale = useRecoilValue(weatherLocationLocale);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  if (!isGeolocationAvailable && !isGeolocationEnabled && !coords) {
    return <div>Getting the location data&hellip;</div>;
  }

  if (!isGeolocationAvailable) {
    return <div>Checking for Geolocation permissions.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled.</div>;
  }

  return (
    <>
      {coords && coords.latitude && coords.longitude && !forecast.loaded && (
        <UtilizeCoordinatesForecast
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      )}
      {coords && coords.latitude && coords.longitude && !locale.loaded && (
        <UtilizeCoordinatesLocale
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      )}

      <WeatherByLocationCard />
    </>
  );
};

export default GeoLocatedWeather;
```

## Let’s discuss…

We are using a few external tools to help out. For this bit of code, you will need to import <a href="https://www.npmjs.com/package/react-geolocated" target="_blank"><strong>react-geolocated</strong></a> and <a href="https://www.npmjs.com/package/recoil" target="_blank"><strong>recoil</strong></a> into your app. Otherwise your app will not work.

## GeoLocatedWeather

The first thing you should notice is that the function declares some constants. Two are from useRecoilValue and three are from useGeoLocated.

The constants from useGeoLocated will timeout if the user does not allow geolocation within 5 seconds (5000 milliseconds).

Oh, and we will discuss the atoms in a different installment of this tutorial.

Once the constants are declared, the next step is to create fallbacks in case certain features of geolocation are not provided to the code base. That is what the next three if statements do.

The final return statement passes coordinates data to UtilizeCoordinatesForecast and to UtilizeCoordinatesLocale once the coordinates are made available.

And the WeatherByLocationCard is also rendered.

## What Now?

Ah, you will have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌦️⚛️

\#GatsbyJS #TypeScript #ReactJS #ReactQuery #Recoil #ChakraUI #WeatherApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
  Photo by <a href="https://unsplash.com/@dagna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Bjark</a> on <a href="https://unsplash.com/photos/clear-blue-sky-DZ975EkUJH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
</span>
