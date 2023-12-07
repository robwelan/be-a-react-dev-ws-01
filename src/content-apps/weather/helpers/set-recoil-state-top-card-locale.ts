//  date-fns
import { format } from 'date-fns';
//  default state
import { stateWeatherLocationTopCard } from '../state/default-recoil-states';

type Payload = {
  data: {
    address: {
      country_code: string;
    };
    licence: string;
    name: string;
  };
  setState: Function;
};

type State = {
  location: {};
};

const setTopCardLocale = (payload: Payload) => {
  const { data, setState } = payload;
  const { address, licence = '', name = '' } = data;
  const { country_code = '' } = address;
  const datePresentation = format(new Date(), 'cccc, d MMMM yyyy');

  setState((prevState: State) => ({
    ...stateWeatherLocationTopCard,
    ...prevState,
    location: {
      ...prevState.location,
      countryCode: country_code.toUpperCase(),
      date: datePresentation,
      licence,
      place: name,
    },
  }));
};

export default setTopCardLocale;
