//  constants
import {
  UNITS_OF_MEASUREMENT_IMPERIAL,
} from '../../../../../constants';

type Payload = {
  setState: Function;
};

const setImperial = (payload) => {
  const { setState } = payload;

  setState((prevState) => ({
    ...prevState,
    units: UNITS_OF_MEASUREMENT_IMPERIAL,
  }));
};

export default setImperial;
