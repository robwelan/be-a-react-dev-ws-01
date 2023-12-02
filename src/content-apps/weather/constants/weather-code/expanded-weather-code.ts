//  react icons
import { WiDaySunnyOvercast } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiNightClear } from 'react-icons/wi';
import { WiNightPartlyCloudy } from 'react-icons/wi';
import { WiDayCloudyHigh } from 'react-icons/wi';
import { WiNightCloudyHigh } from 'react-icons/wi';
import { WiDayFog } from 'react-icons/wi';
import { WiNightFog } from 'react-icons/wi';
import { WiDayThunderstorm } from 'react-icons/wi';
import { WiNightThunderstorm } from 'react-icons/wi';

const expandedWeatherCode = {
  0: {
    day: null,
    night: null,
    label: 'Unknown',
    theme: { dark: '#fff', light: '#000' },
  },
  1000: {
    day: WiDaySunny,
    night: WiNightClear,
    label: 'Clear',
    theme: { dark: '#ffff00', light: '#FFA500' },
  },
  1001: {
    day: WiCloudy,
    night: WiCloudy,
    label: 'Cloudy',
    theme: { dark: '#DFDFDF', light: '#C5C5C5' },
  },
  1100: {
    day: WiDaySunnyOvercast,
    night: WiNightPartlyCloudy,
    label: 'Mostly Clear',
    theme: { dark: '#ffff00', light: '#FFA500' },
  },
  1101: {
    day: WiDayCloudy,
    night: WiNightPartlyCloudy,
    label: 'Partly Cloudy',
    theme: { dark: '#ffff00', light: '#FFA500' },
  },
  1102: {
    day: WiDayCloudyHigh,
    night: WiNightCloudyHigh,
    label: 'Mostly Cloudy',
    theme: { dark: '#DFDFDF', light: '#C5C5C5' },
  },
  2000: {
    day: WiDayFog,
    night: WiNightFog,
    label: 'Fog',
    theme: { dark: '#DFDFDF', light: '#C5C5C5' },
  },
  2100: {
    day: WiDayFog,
    night: WiNightFog,
    label: 'Light Fog',
    theme: { dark: '#DFDFDF', light: '#C5C5C5' },
  },
  4000: 'Drizzle',
  4001: 'Rain',
  4200: 'Light Rain',
  4201: 'Heavy Rain',
  5000: 'Snow',
  5001: 'Flurries',
  5100: 'Light Snow',
  5101: 'Heavy Snow',
  6000: 'Freezing Drizzle',
  6001: 'Freezing Rain',
  6200: 'Light Freezing Rain',
  6201: 'Heavy Freezing Rain',
  7000: 'Ice Pellets',
  7101: 'Heavy Ice Pellets',
  7102: 'Light Ice Pellets',
  8000: {
    day: WiDayThunderstorm,
    night: WiNightThunderstorm,
    label: 'Thunderstorm',
    theme: { dark: '#DFDFDF', light: '#C5C5C5' },
  },
};

export default expandedWeatherCode;
