import { UNITS_OF_MEASUREMENT_METRIC } from '../constants';

const stateWeatherLocationTopCard = {
  location: {
    countryCode: '',
    date: '',
    place: '',
  },
  weather: {
    code: 0,
    daylight: true,
    humidity: 0,
    imperial: { dewpoint: 0, temperature: 0, temperatureApparent: 0 },
    metric: { dewpoint: 0, temperature: 0, temperatureApparent: 0 },
    moonriseTime: '',
    moonsetTime: '',
    sunriseTime: '',
    sunsetTime: '',
    uvIndex: 0,
    uvIndexMax: 0,
    windDirection: 0,
  },
  units: UNITS_OF_MEASUREMENT_METRIC,
};

export { stateWeatherLocationTopCard };
