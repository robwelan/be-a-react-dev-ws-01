//  constants
import {
  MAGIC_NUMBER_FAHRENHEIT_CORRECTION,
  MAGIC_NUMBER_FAHRENHEIT_MULTIPLIER,
} from '../constants/magic-numbers';
//  utilities
import getRounded from '../../../utilities/numbers/get-number-rounded-to-decimal-place';

/*
  formula
    (32°F − 32) × 5/9 = 0°C
*/

type Payload = {
  temp: number;
};

const getFahrenheitToCelsius = (payload: Payload) => {
  const { temp = 0 } = payload;
  const tempC =
    (temp - MAGIC_NUMBER_FAHRENHEIT_CORRECTION) *
    MAGIC_NUMBER_FAHRENHEIT_MULTIPLIER;
  const fixedTempC = getRounded({ value: tempC, places: 1 });

  return fixedTempC;
};

export default getFahrenheitToCelsius;
