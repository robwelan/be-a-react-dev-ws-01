//  date-fns
import { format } from 'date-fns';
//  default state
import { stateWeatherLocationTopCard } from '../state/default-recoil-states';

type Payload = {
  data: {
    timelines: {
      daily: [];
      minutely: [];
    };
  };
  setState: Function;
};

const setTopCardLocale = (payload: Payload) => {
  const { data, setState } = payload;
  const { address = {}, name = '' } = data;
  const { country_code = '' } = address;
  const datePresentation = format(new Date(), 'cccc, d MMMM yyyy');

  setState((prevState) => ({
    ...stateWeatherLocationTopCard,
    ...prevState,
    location: {
      ...prevState.location,
      countryCode: country_code.toUpperCase(),
      date: datePresentation,
      place: name,
    },
  }));
};

export default setTopCardLocale;
