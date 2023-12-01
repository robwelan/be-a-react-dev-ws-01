//  react icons
import { WiDayCloudy } from 'react-icons/wi';
import { WiNightAltCloudy } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiNightClear } from 'react-icons/wi';

const expandedWeatherCode = {
  0: { day: null, night: null, label: 'Unknown' },
  1000: { day: WiDaySunny, night: WiNightClear, label: 'Clear' },
  1001: { day: WiDayCloudy, night: WiNightAltCloudy, label: 'Cloudy' },
  1100: 'Mostly Clear',
  1101: 'Partly Cloudy',
  1102: 'Mostly Cloudy',
  2000: 'Fog',
  2100: 'Light Fog',
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
  8000: 'Thunderstorm',
};

export default expandedWeatherCode;
