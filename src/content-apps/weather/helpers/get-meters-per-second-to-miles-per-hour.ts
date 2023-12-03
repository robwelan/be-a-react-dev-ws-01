//  constants
import { MAGIC_NUMBER_METERS_PER_SECOND_TO_MILES_PER_HOUR } from '../constants/magic-numbers';
//  utilities
import getRounded from '../../../utilities/numbers/get-number-rounded-to-decimal-place';

/*
  formula
    (0°C × 9/5) + 32 = 32°F
*/

type Payload = {
  value: number;
};

const getMetersPerSecondToMilesPerHour = (payload: Payload) => {
  const { value = 0 } = payload;
  const newValue = value * MAGIC_NUMBER_METERS_PER_SECOND_TO_MILES_PER_HOUR;
  const rounded = getRounded({ value: newValue, places: 1 });

  return rounded;
};

export default getMetersPerSecondToMilesPerHour;
