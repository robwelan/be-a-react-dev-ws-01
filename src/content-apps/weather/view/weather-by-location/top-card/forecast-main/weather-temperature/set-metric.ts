//  constants
import { UNITS_OF_MEASUREMENT_METRIC } from '../../../../../constants';

type Payload = {
  setState: Function;
};

const setMetric = (payload) => {
  const { setState } = payload;

  setState((prevState) => ({
    ...prevState,
    units: UNITS_OF_MEASUREMENT_METRIC,
  }));
};

export default setMetric;
