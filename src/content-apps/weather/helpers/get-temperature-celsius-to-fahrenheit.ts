//  constants
import {
  MAGIC_NUMBER_FAHRENHEIT_CORRECTION,
  MAGIC_NUMBER_FAHRENHEIT_MULTIPLIER,
} from '../constants/magic-numbers';
//  utilities
import getRounded from '../../../utilities/numbers/get-number-rounded-to-decimal-place';

/*
  formula
    (0°C × 9/5) + 32 = 32°F
*/

type Payload = {
  temp: number;
};

const getCelsiusToFahrenheit = (payload: Payload) => {
  const { temp = 0 } = payload;
  const tempAndMultiplier = temp * MAGIC_NUMBER_FAHRENHEIT_MULTIPLIER;
  const tempF = tempAndMultiplier + MAGIC_NUMBER_FAHRENHEIT_CORRECTION;
  const fixedTempF = getRounded({ value: tempF, places: 1 });

  return fixedTempF;
};

export default getCelsiusToFahrenheit;
