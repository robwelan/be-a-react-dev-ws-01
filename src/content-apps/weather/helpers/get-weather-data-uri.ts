/*
  https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
*/

import { TOMORROWIO_API_URI } from '../constants';
//  types
import { Coordinates } from '../types';

const getWeatherDataUri = (payload: Coordinates) => {
  const { latitude, longitude } = payload;
  const key = process.env.GATSBY_TOMORROWIO_API_KEY;
  //https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=LAA8qwMoMyyzl1sq0zjgBx9P2LtVlz02
  return `${TOMORROWIO_API_URI}?location=${latitude},${longitude}&apikey=${key}`;
};

export default getWeatherDataUri;
