import { format as dateFormat } from 'date-fns';

type Payload = {
  time: string;
  format: string;
};

const getWeatherTime = (payload: Payload) => {
  const { time, format } = payload;

  if (time === '') return '';

  return dateFormat(new Date(time), format);
};

export default getWeatherTime;
