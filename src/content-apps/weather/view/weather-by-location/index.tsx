import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import {
  weatherLocationForecast,
  weatherLocationLocale,
} from '../../state/atoms';
//  local components
import TopCard from './top-card';

const WeatherByLocation = () => {
  const forecast = useRecoilValue(weatherLocationForecast);
  const locale = useRecoilValue(weatherLocationLocale);

  if (forecast.loading) {
    return null;
  }

  if (locale.loading) {
    return null;
  }

  return <TopCard />;
};

export default WeatherByLocation;
