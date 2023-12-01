type Payload = {
  current: string;
  sunset: string;
  sunrise: string;
};

const getDaylight = (payload: Payload) => {
  const { current = '', sunrise = '', sunset = '' } = payload;

  if (current !== '' && sunrise !== '' && sunset !== '') {
    const cc = new Date(current).getTime();
    const sr = new Date(sunrise).getTime();
    const ss = new Date(sunset).getTime();

    return sr <= cc && cc <= ss;
  }

  return true;
};

export default getDaylight;
