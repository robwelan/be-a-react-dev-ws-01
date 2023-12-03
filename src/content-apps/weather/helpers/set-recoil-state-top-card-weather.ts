import getDaylight from './get-daylight';
//  default state
import { stateWeatherLocationTopCard } from '../state/default-recoil-states';
//  helpers
import getCelsiusToFahrenheit from './get-temperature-celsius-to-fahrenheit';
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
  const { moonriseTime, moonsetTime, sunriseTime, sunsetTime, uvIndexMax } =
    valuesDaily;
  const {
    dewPoint,
    humidity,
    temperature,
    temperatureApparent,
    uvIndex,
    weatherCode,
    windDirection,
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
      humidity,
      imperial: {
        dewPoint: getCelsiusToFahrenheit({ temp: dewPoint }),
        temperature: getCelsiusToFahrenheit({ temp: temperature }),
        temperatureApparent: getCelsiusToFahrenheit({
          temp: temperatureApparent,
        }),
      },
      metric: {
        dewPoint,
        temperature: getNumberRounded({ value: temperature, places: 1 }),
        temperatureApparent: getNumberRounded({
          value: temperatureApparent,
          places: 1,
        }),
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
