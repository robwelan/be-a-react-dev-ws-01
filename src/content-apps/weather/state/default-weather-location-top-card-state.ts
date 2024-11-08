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
