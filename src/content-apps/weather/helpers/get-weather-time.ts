import { format as dateFormat } from 'date-fns';

const getWeatherTime = (payload) => {
  const { time, format } = payload;

  if (time === '') return '';

  return dateFormat(new Date(time), format);
};

export default getWeatherTime;
