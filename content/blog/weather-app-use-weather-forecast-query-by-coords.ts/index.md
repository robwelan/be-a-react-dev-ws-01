---
title: Use Coordinates To Get The Forecast In A Weather App with GatsbyJS, TypeScript, Recoil and React!
date: "2024-02-14T08:58:00Z"
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
  title: Use Coordinates To Get The Forecast In A Weather App with GatsbyJS, TypeScript, Recoil and React!
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#weatherapptutorial"
---

## Introduction

In a <a href="/weather-app-utilize-coordinates/"><strong>previous article</strong></a> we looked at passing coordingates into a couple of “dumb components”. What these components really do we will look at in a bit more detail here.

This post details the hook used in the <strong>src/content-apps/weather/data/utilize-coordinates-forecast.tsx</strong> file.

## src/content-apps/weather/hooks/use-weather-forecast-query-by-coords.ts

```typescript
import { useEffect } from 'react';
//  react-query
import { useQuery } from '@tanstack/react-query';
//  recoil
import { useSetRecoilState } from 'recoil';
//  helpers
import getWeatherDataUri from '../helpers/get-weather-data-uri';
import setTopCardWeather from '../helpers/set-recoil-state-top-card-weather';
//  recoil
import {
  weatherLocationForecast,
  weatherLocationTopCard,
} from '../state/atoms';
//  types
import { Coordinates } from '../types';

interface Payload extends Coordinates {
  dev?: boolean;
}

const useWeatherForecastQuery = (payload: Payload) => {
  const { latitude, longitude } = payload;
  const { data, error, isPending } = useQuery({
    queryKey: ['weather-forecast'],
    queryFn: () =>
      fetch(
        getWeatherDataUri({
          latitude,
          longitude,
        }),
      )
        .then((res) => {
          if (res) {
            if (res.status !== 200) {
              throw new Error(JSON.stringify(res.statusText));
            }
          }

          return res;
        })
        .then(async (res) => {
          const result = await res.json();

          return result;
        }),
  });
  const setForecast = useSetRecoilState(weatherLocationForecast);
  const setTopCardWeatherRecoil = useSetRecoilState(weatherLocationTopCard);

  //  error effect
  useEffect(() => {
    if (error) {
      const errorData = {
        error: true,
        message: `An error has occurred: ${error.message}`,
      };

      setForecast({ data: errorData, loaded: true, loading: false });
    }
  }, [error]);

  //  data effect
  useEffect(() => {
    if (!error && !isPending && data) {
      setForecast({
        data: { ...data, error: false },
        loaded: true,
        loading: false,
      });
      setTopCardWeather({ data, setState: setTopCardWeatherRecoil });
    }
  }, [error, isPending, data]);

  //  isPending effect
  useEffect(() => {
    if (isPending) {
      setForecast({ data: { error: false }, loaded: false, loading: true });
    }
  }, [isPending]);

  return null;
};

export default useWeatherForecastQuery;
```

## Imports

Make sure you have installed <a href="https://www.npmjs.com/package/@tanstack/react-query" target="_blank"><strong>@tanstack/react-query
</strong></a>. You will need it.

This hook uses react-query’s useQuery hook. You will also notice it uses useSetRecoilState from recoil, and useEffect from React, a couple of helpers, and a couple of atoms (for using with recoil state manager). Plus some types I have defined (the Payload extends the Coordinates type). Oh, it appears dev?: boolean; is superfluous. My bad.

## Payload

The hook itself expects latitude and longitude to be passed into it via the payload.

## Variables

Next the hook defines the useQuery, which uses fetch to return data from a URI provided by a helper (getWeatherDataUri). The fetch query is set up to ensure if an error occurs, something icky happens, but not too icky. Otherwise, it simply awaits the data which we hope to retrieve from the URI.

After that we define our setStates of recoil (setForecast and setTopCardWeatherRecoil).

## Effects

Now we can start defining our useEffects. I like to put them in alphabetical order by basic action. In this case error handling comes first.

The error effect simply responds to the error provided (maybe) by the useQuery error. Should an error occur, the setForecast state is set accordingly. You can see that an object is set, with data set with errorData, and loaded set to true and loading set to false. I like to be verbose with loaded and loading. I could just use loaded being true or false but I find I do not get the granular control I like to have most times when working with APIs.

The next effect uses relies on error, isPending and data from useQuery to respond to. Within it, assuming certain conditions are met, setForecast and setTopCardWeatherRecoil are given data.

The last effect uses isPending to respond to which comes from useQuery. If the data isPending, I set the setForecast state with loaded and and loading flags appropriately, and set data a little bit.

## Return

Because this code feeds recoil states, I do not bother to return anything but null from this hook. Recoil states are available anywhere I have made recoil available in my system.

Cool.

## What Now?

Ah, you will have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌦️⚛️

\#GatsbyJS #TypeScript #ReactJS #ReactQuery #Recoil #ChakraUI #WeatherApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
  Photo by <a href="https://unsplash.com/@dagna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Bjark</a> on <a href="https://unsplash.com/photos/clear-blue-sky-DZ975EkUJH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
</span>
