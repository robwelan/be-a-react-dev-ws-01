import getDaylight from './get-daylight';
//  default state
import { stateWeatherLocationTopCard } from '../state/default-recoil-states';
//  helpers
import getCelsiusToFahrenheit from './get-temperature-celsius-to-fahrenheit';
import getMetersPerSecondToMilesPerHour from './get-meters-per-second-to-miles-per-hour';
//  utilities
import getNumberRounded from '../../../utilities/numbers/get-number-rounded-to-decimal-place';

type Payload = {
  data: {
    timelines: {
      daily: [];
      minutely: [];
    };
  };
  setState: Function;
};

const setTopCardWeather = (payload: Payload) => {
  const { data, setState } = payload;
  const { timelines } = data;
  const { daily: stateDaily = [], minutely: stateMinutely = [] } = timelines;

  const [firstDaily] = stateDaily;
  const minutely = [...stateMinutely].pop();
  const { values: valuesDaily } = firstDaily;
  const { time: timeMinutely, values: valuesMinutely } = minutely;
  const {
    moonriseTime,
    moonsetTime,
    sunriseTime,
    sunsetTime,
    temperatureApparentAvg,
    temperatureApparentMax,
    temperatureApparentMin,
    temperatureAvg,
    temperatureMax,
    temperatureMin,
    uvIndexMax,
  } = valuesDaily;
  const {
    dewPoint,
    humidity,
    temperature,
    temperatureApparent,
    uvIndex,
    weatherCode,
    windDirection,
    windGust,
    windSpeed,
  } = valuesMinutely;

  const daylight = getDaylight({
    current: timeMinutely,
    sunrise: sunriseTime,
    sunset: sunsetTime,
  });

  setState((prevState) => ({
    ...stateWeatherLocationTopCard,
    ...prevState,
    weather: {
      ...prevState.weather,
      code: weatherCode,
      daylight,
      humidity: getNumberRounded({ value: humidity, places: 1 }),
      imperial: {
        dewPoint: getCelsiusToFahrenheit({ temp: dewPoint }),
        temperature: {
          avg: getCelsiusToFahrenheit({ temp: temperatureAvg }),
          max: getCelsiusToFahrenheit({ temp: temperatureMax }),
          min: getCelsiusToFahrenheit({ temp: temperatureMin }),
          now: getCelsiusToFahrenheit({ temp: temperature }),
        },
        temperatureApparent: {
          avg: getCelsiusToFahrenheit({
            temp: temperatureApparentAvg,
          }),
          max: getCelsiusToFahrenheit({
            temp: temperatureApparentMax,
          }),
          min: getCelsiusToFahrenheit({
            temp: temperatureApparentMin,
          }),
          now: getCelsiusToFahrenheit({
            temp: temperatureApparent,
          }),
        },
        windGust: {
          unit: 'mph',
          value: getMetersPerSecondToMilesPerHour({ value: windGust }),
        },
        windSpeed: {
          unit: 'mph',
          value: getMetersPerSecondToMilesPerHour({ value: windSpeed }),
        },
      },
      metric: {
        dewPoint,
        temperature: {
          avg: getNumberRounded({ value: temperatureAvg, places: 1 }),
          max: getNumberRounded({ value: temperatureMax, places: 1 }),
          min: getNumberRounded({ value: temperatureMin, places: 1 }),
          now: getNumberRounded({ value: temperature, places: 1 }),
        },
        temperatureApparent: {
          avg: getNumberRounded({
            value: temperatureApparentAvg,
            places: 1,
          }),
          max: getNumberRounded({
            value: temperatureApparentMax,
            places: 1,
          }),
          min: getNumberRounded({
            value: temperatureApparentMin,
            places: 1,
          }),
          now: getNumberRounded({
            value: temperatureApparent,
            places: 1,
          }),
        },
        windGust: {
          unit: 'm/s',
          value: getNumberRounded({
            value: windGust,
            places: 1,
          }),
        },
        windSpeed: {
          unit: 'm/s',
          value: getNumberRounded({
            value: windSpeed,
            places: 1,
          }),
        },
      },
      moonriseTime,
      moonsetTime,
      sunriseTime,
      sunsetTime,
      uvIndex,
      uvIndexMax,
      windDirection,
    },
  }));
};

export default setTopCardWeather;
