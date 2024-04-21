---
title: State Management In A Weather App using GatsbyJS, TypeScript, Recoil and React!
date: "2024-04-08T09:06:00Z"
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
  title: State Management In A Weather App using GatsbyJS, TypeScript, Recoil and React!
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#weatherapptutorial"
---

## Introduction

In the <a href="/weather-app-use-weather-forecast-query-by-coords.ts/"><strong>previous article</strong></a> we looked at using coordingates to get weather data.

This post looks at the state which is used to store the retrieved data. Buckle up. This is going to be a bumpy ride.

## src/content-apps/weather/constants/index.ts

```typescript
const OPENSTREETMAP_REVERSE_API_URI =
  'https://nominatim.openstreetmap.org/reverse';
const TOMORROWIO_API_URI = 'https://api.tomorrow.io/v4/weather/forecast';
const TIME_OF_DAY_IS_DAY_TIME = 'day';
const TIME_OF_DAY_IS_NIGHT_TIME = 'night';
const UNITS_OF_MEASUREMENT_IMPERIAL = 'imperial';
const UNITS_OF_MEASUREMENT_METRIC = 'metric';

export {
  OPENSTREETMAP_REVERSE_API_URI,
  TOMORROWIO_API_URI,
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
  UNITS_OF_MEASUREMENT_IMPERIAL,
  UNITS_OF_MEASUREMENT_METRIC,
};
```

## About Constants

The constants file is a set of values that do not change that may be used in various places around an app - or - may be useful to keep with other values that do not change. Sometimes having a library of things is better than putting things in the only place they might be used. One has a big list of things. But you know where they are at least. The other is you have lots of things. But where did you put the thing that you need ritht now?

## src/content-apps/weather/state/default-weather-location-top-card-states.ts

```typescript
import { UNITS_OF_MEASUREMENT_METRIC } from '../constants';

const stateWeatherLocationTopCard = {
  location: {
    countryCode: '',
    date: '',
    licence: '',
    place: '',
  },
  weather: {
    code: 0,
    daylight: true,
    humidity: 0,
    imperial: {
      dewpoint: 0,
      temperature: {
        avg: 0,
        max: 0,
        min: 0,
        now: 0,
      },
      temperatureApparent: {
        avg: 0,
        max: 0,
        min: 0,
        now: 0,
      },
      windGust: {
        unit: 'kph',
        value: 0,
      },
      windSpeed: {
        unit: 'kph',
        value: 0,
      },
    },
    metric: {
      dewpoint: 0,
      temperature: {
        avg: 0,
        max: 0,
        min: 0,
        now: 0,
      },
      temperatureApparent: {
        avg: 0,
        max: 0,
        min: 0,
        now: 0,
      },
      windGust: {
        unit: 'm/s',
        value: 0,
      },
      windSpeed: {
        unit: 'm/s',
        value: 0,
      },
    },
    moonriseTime: '',
    moonsetTime: '',
    sunriseTime: '',
    sunsetTime: '',
    uv: {
      index: 0,
      min: 0,
      max: 0,
    },
    uvHealthConcern: {
      index: 0,
      min: 0,
      max: 0,
    },
    windDirection: 0,
  },
  units: UNITS_OF_MEASUREMENT_METRIC,
};

export { stateWeatherLocationTopCard };
```

## About Weather Location Top Card State

The idea of the this object is to provide place for the api data to be dropped into. It has no other purpose but to house api data. The shape is more or less determined by the api data. You need to read the api documentation (of whatever api it is you are using) - or - you need to acquire data from the api - in order to build the shape of the object.

## src/content-apps/weather/state/atoms.ts

```typescript
import { atom } from 'recoil';
//  default states
import { stateWeatherLocationTopCard } from './default-weather-location-top-card-state';

export const weatherLocationLocale = atom({
  key: 'weatherLocationLocale',
  default: { data: {}, loaded: false, loading: false },
});

export const weatherLocationForecast = atom({
  key: 'weatherLocationForecast',
  default: { data: {}, loaded: false, loading: false },
});

export const weatherLocationTopCard = atom({
  key: 'weatherLocationTopCard',
  default: stateWeatherLocationTopCard,
});
```

## About Atoms

First the default weather location top card state is imported because it will be used in one of the atoms.

Because we are using <a href="https://recoiljs.org/" target="_blank">Recoil</a>, the atom shapes follow the pattern described in that documentation.

As you can see the default for both weatherLocationLocale and weatherLocationForecast is simply an empty object ( or {}).

The weatherLocationTopCard is using the stateWeatherLocationTopCard state import.

## What Now?

Ah, you will have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌦️⚛️

\#GatsbyJS #TypeScript #ReactJS #ReactQuery #Recoil #ChakraUI #WeatherApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
  Photo by <a href="https://unsplash.com/@dagna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Bjark</a> on <a href="https://unsplash.com/photos/clear-blue-sky-DZ975EkUJH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
</span>
