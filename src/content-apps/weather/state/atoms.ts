import { atom } from 'recoil';
//  default states
import { stateWeatherLocationTopCard } from './default-recoil-states';

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
