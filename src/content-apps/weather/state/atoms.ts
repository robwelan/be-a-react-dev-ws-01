import { atom } from 'recoil';

export const weatherLocationLocale = atom({
  key: 'weatherLocationLocale',
  default: { data: {}, loaded: false, loading: false },
});

export const weatherLocationForecast = atom({
  key: 'weatherLocationForecast',
  default: { data: {}, loaded: false, loading: false },
});
